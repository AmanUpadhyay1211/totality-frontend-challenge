import { Client, Account, ID } from "appwrite";
import envConf from "../envConf/envConf";

class AuthService {
  private client: Client;
  private account: Account;

  constructor() {
    this.client = new Client()
      .setEndpoint(envConf.appwriteEndpoint)
      .setProject(envConf.appwriteProjectID);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name, avatar = "" }: { email: string; password: string; name: string;avatar:string }){
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        name,
        email,
        password,
        avatar,
      );
      return userAccount || null;
    } catch (error) {
      throw error;
    }
  }

  async createSession({ email, password }: { email: string; password: string }){
    try {
      const session = await this.account.createEmailPasswordSession(email, password);
      return session || false;
    } catch (error) {
      throw error;
    }
  }

  async logout(){
    try {
      await this.account.deleteSession('current');
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser(){
    try {
      const result = await this.account.get();
      return result;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
