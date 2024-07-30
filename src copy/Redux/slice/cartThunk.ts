import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Client, Databases } from 'appwrite';
import envConf from '@/envConf/envConf';

const client = new Client();
client
    .setEndpoint(envConf.appwriteEndpoint) // Your API Endpoint
    .setProject(envConf.appwriteProjectID); // Your project ID

const database = new Databases(client);

interface CartItem {
    id: number;
    title: string;
    description: string;
    price: number;
    location: string;
    bedrooms: number;
    amenities: string[];
    images: string[];
    rating: string;
}

interface CartState {
    items: CartItem[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
    items: [],
    status: 'idle',
};

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async (userId: string) => {
        try {
            const response = await database.getDocument(
                'YOUR_DATABASE_ID',
                'YOUR_COLLECTION_ID',
                userId
            );
            return response.cartItems;
        } catch (error) {
            // If the document doesn't exist, return an empty array
            if (error.code === 404) {
                return [];
            } else {
                throw error;
            }
        }
    }
);

export const updateCart = createAsyncThunk(
    'cart/updateCart',
    async ({ userId, cartItems }: { userId: string; cartItems: CartItem[] }) => {
        try {
            await database.updateDocument(
                'YOUR_DATABASE_ID',
                'YOUR_COLLECTION_ID',
                userId,
                { cartItems }
            );
        } catch (error) {
            if (error.code === 404) {
                await database.createDocument(
                    'YOUR_DATABASE_ID',
                    'YOUR_COLLECTION_ID',
                    userId,
                    { userId, cartItems }
                );
            } else {
                throw error;
            }
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.propertyId !== action.payload);
        },
        updateItemQuantity: (state, action: PayloadAction<{ propertyId: number; quantity: number }>) => {
            const item = state.items.find(item => item.propertyId === action.payload.propertyId);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload;
            })
            .addCase(fetchCart.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
