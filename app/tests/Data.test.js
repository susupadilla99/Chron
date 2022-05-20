import AppDataManager from "../data/AppDataManager";
import AppAccountManager from "../data/AppAccountManager";
import AppAccountsData from "../data/AppAccountsData";

test("Account", () => {
  const manager = AppAccountManager.getInstance();
  const manager2 = AppAccountManager.getInstance();
  const accountData = AppAccountsData.accounts;

  // singleton test
  expect(manager2).toBe(manager);

  // default/testing data test
  expect(manager.accounts).toEqual(accountData);
  
  // find user with email test
  expect(manager.getUser({email: accountData[1].email})).toEqual(manager.accounts[1]);

  // find user with id test
  expect(manager.getUserData({userID: accountData[0].username})).toEqual(manager.accounts[0]);

  // validate credentials test
  var invalidCred = {email: "notvalidemail@gmail.com", password: "wordpass"};
  var invalidCred2 = {email: accountData[1].email, password: accountData[0].password};
  var validCred = {email: accountData[0].email, password: accountData[0].password};
  expect(manager.isValidCredentials(invalidCred)).toEqual(false);
  expect(manager.isValidCredentials(invalidCred2)).toEqual(false);
  expect(manager.isValidCredentials(validCred)).toEqual(true);

  // add new user test
  var initialLength = manager.accounts.length;
  var newUser = {
    name: 'Fireship IO',
    username: "himom",
    email: "fireship@mail.io",
    password: "hellomother",
  };
  manager.addUser(newUser);
  expect(manager.accounts.length).toBe(initialLength+1);
  expect(manager.accounts[manager.accounts.length-1].name).toEqual(newUser.name);
  expect(manager.accounts[manager.accounts.length-1].email).toEqual(newUser.email);
  expect(manager.accounts[manager.accounts.length-1].username).toEqual(newUser.username);
  expect(manager.accounts[manager.accounts.length-1].password).toEqual(newUser.password);
  expect(manager.accounts[manager.accounts.length-1].profileImage).toEqual('');
});