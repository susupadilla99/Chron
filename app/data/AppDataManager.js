import AppMemoryData from './AppMemoryData';

export default class AppDataManager {
  static myInstance = null;
  userID = "";

  memories = AppMemoryData.memories;
  maxId = 12;

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

  getData() {
    let retVal = this.memories.filter(memory=>memory.userID===this.userID);
    return retVal;
  }

  addMemory({userID, category, title, date, image, content}) {
    let newMemory = {
      userID: userID,
      category: category,
      title: title,
      date: date,
      image: image,
      content: content,
      id: this.maxId+1,
    }
    this.maxId++;
    this.memories.push(newMemory);
    //this.printMemories();
  }

  deleteMemory(id) {
    this.memories = this.memories.filter(memory=>memory.id!=id);
  }

  printMemories() {
    this.memories.forEach(item=>{
      console.log(item.title+" - "+item.userID);
    });
  }

}