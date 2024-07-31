const envConf = {
    appwriteEndpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
    appwriteProjectID: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    appwriteCollectionID: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID),
    appwriteBucketID: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID)
};

export default envConf;
