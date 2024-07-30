import { Client, Databases, Storage, ID, Models } from "appwrite";
import envConf from "../envConf/envConf";

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

interface Cart {
  slug: string; // user ID used as slug
  userID: string;
  userName: string;
  cartItems: CartItem[];
  bookedItems: CartItem[];
}

class ManageCartService {
  private client: Client;
  private database: Databases;
  private storage: Storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(envConf.appwriteEndpoint)
      .setProject(envConf.appwriteProjectID);

    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // CRUD operation for Cart
  async createCart(cart: Cart): Promise<Models.Document | null> {
    const { slug, userID, userName, cartItems, bookedItems } = cart;
    try {
      const doc = await this.database.createDocument(
        envConf.appwriteDatabaseID,
        envConf.appwriteCollectionID,
        slug,
        {
          userID,
          userName,
          cartItems,
          bookedItems,
        }
      );
      return doc;
    } catch (error) {
      console.log("Appwrite service :: createCart :: error", error);
      return null;
    }
  }

  async updateCart(cart: Cart): Promise<Models.Document | null> {
    const { slug, userID, userName, cartItems, bookedItems } = cart;
    try {
      const doc = await this.database.updateDocument(
        envConf.appwriteDatabaseID,
        envConf.appwriteCollectionID,
        slug,
        { userID, userName, cartItems, bookedItems }
      );
      return doc;
    } catch (error) {
      console.log("Appwrite service :: updateCart :: error", error);
      return null;
    }
  }

  async getCart(): Promise<Models.DocumentList<Models.Document> | null> {
    try {
      const carts = await this.database.listDocuments(
        envConf.appwriteDatabaseID,
        envConf.appwriteCollectionID,
        []
      );
      return carts;
    } catch (error) {
      console.log("Appwrite service :: getCart :: error", error);
      return null;
    }
  }

  async deleteCart(slug: string): Promise<boolean> {
    try {
      await this.database.deleteDocument(
        envConf.appwriteDatabaseID,
        envConf.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteCart :: error", error);
      return false;
    }
  }

  // File upload, in this case it's going to be an image
  async uploadFile(file: File): Promise<Models.File | null> {
    try {
      const result = await this.storage.createFile(
        envConf.appwriteBucketID,
        ID.unique(),
        file
      );
      return result;
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return null;
    }
  }

  async deleteFile(fileID: string): Promise<boolean> {
    try {
      await this.storage.deleteFile(envConf.appwriteBucketID, fileID);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileID: string): string | boolean {
    try {
      const result = this.storage.getFilePreview(envConf.appwriteBucketID, fileID);
      return result.href;
    } catch (error) {
      console.log("Appwrite service :: getFilePreview :: error", error);
      return false;
    }
  }
}

const manageCartService = new ManageCartService();
export default manageCartService;
