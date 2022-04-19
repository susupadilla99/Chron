import AppMemoryData from './AppMemoryData';

export default class AppDataManager {
  static myInstance = null;
  userID = "";

  memories = AppMemoryData.memories;

  static getInstance() {
    if (AppDataManager.myInstance == null){
      AppDataManager.myInstance = new AppDataManager();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userID;
  }

  setUserID(id) {
    this.userID = id;
  }

  

}