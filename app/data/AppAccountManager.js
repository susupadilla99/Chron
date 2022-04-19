import AppAccountsData from './AppAccountsData';
import AppMemoryData from './AppMemoryData';

export default class AppAccountManager {
  static myInstance = null;

  accounts = AppAccountsData.accounts;

  static getInstance() {
    if (AppAccountManager.myInstance == null){
      AppAccountManager.myInstance = new AppAccountManager();
    }
    return this.myInstance;
  }

  addUser({name, username, email, password}) {
    newUser = {
      name: name,
      username: username,
      email: email,
      password: password,
      profileImage: '',
    };
    this.accounts.push(newUser);
  }

  isValidCredentials({email, password}) {
    return this.accounts.find(user=>user.email===email&&user.password===password)!==undefined;
  }

  getUser({email}) {
    return this.accounts.find(user=>user.email===email);
  }

}