/**
 * This class contains service functions for Items related I/O operations with the API
 */
 export default class ItemService {
  itemService = null;
  serviceClient = null;

  /**
   * This is the constructer of ItemService class. this will set the serviceClient value
   * 
   * @param {any} client - An api instance from axios
   */
  constructor(client) {
    this.serviceClient = client;
  }

  /**
   * This static function will return a singleton ItemService instance
   * 
   * @param {any} client - An api instance from axios
   * @returns itemService - A singleton object of the ItemService class
   */
  static getItemService(client) {

    // Here we check if there's already and ItemInstance available before we create new one
    if (this.itemService == null) {
      this.itemService = new ItemService(client);
    }
    return this.itemService;
  }
  /**
   * This function will handle fetching Items from the API
   * 
   * @returns Promise - which will fetch with Items as an array
   */
   getItems() {
    return new Promise((resolve, reject) => {
      this.serviceClient.get("items").then(
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
