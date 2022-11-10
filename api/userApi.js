/**
 * This class contains service functions for Items related I/O operations with the API
 */
 export default class UserService {
    userService = null;
    serviceClient = null;
  
    /**
     * This is the constructer of UserService class. this will set the serviceClient value
     * 
     * @param {any} client - An api instance from axios
     */
    constructor(client) {
      this.serviceClient = client;
    }
  
    /**
     * This static function will return a singleton UserService instance
     * 
     * @param {any} client - An api instance from axios
     * @returns userService - A singleton object of the UserService class
     */
    static getUserService(client) {
  
      // Here we check if there's already and ItemInstance available before we create new one
      if (this.userService == null) {
        this.userService = new UserService(client);
      }
      return this.userService;
    }
    /**
     * This function will handle login from the API
     * 
     * @returns Promise - which will log the user to the system
     */
     loginUser(authObj) {
        return new Promise((resolve, reject) => {
          this.serviceClient.post(`users/login`, authObj).then(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
    }
  }
  