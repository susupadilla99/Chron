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
  }

  editMemory(newMemory) {
    this.memories=this.memories.filter(item=>item.id!==newMemory.id);
    let editedMemory = {
      userID: newMemory.userID,
      category: newMemory.category,
      title: newMemory.title,
      date: newMemory.date,
      image: newMemory.image,
      content: newMemory.content,
      id: newMemory.id,
    }
    this.memories.push(editedMemory);
    this.memories.sort((item1, item2)=>{
      return item1.id-item2.id;
    });
    this.printMemories();
  }
   

  deleteMemory(id) {
    this.memories = this.memories.filter(memory=>memory.id!=id);
  }

  printMemories() {
    this.memories.forEach(item=>{
      console.log(item.title+" - "+item.userID);
    });
    console.log('------------');
  }

}