/**
 * This class contains service functions for Order related I/O operations with the API
 */
 export default class OrderService {
  orderService = null;
  serviceClient = null;

  /**
   * This is the constructer of OrderService class. this will set the serviceClient value
   * 
   * @param {any} client - An api instance from axios
   */
  constructor(client) {
    this.serviceClient = client;
  }

  /**
   * This static function will return a singleton OrderService instance
   * 
   * @param {any} client - An api instance from axios
   * @returns orderService - A singleton object of the OrderService class
   */
  static getOrderService(client) {

    // Here we check if there's already and OrderInstance available before we create new one
    if (this.orderService == null) {
      this.orderService = new OrderService(client);
    }
    return this.orderService;
  }

  /**
   * This function will hanlde adding an order
   * 
   * @param {object} payload - request object of the API
   * @returns Promise - which will updates the order
   */
   addOrder(payload) {
    return new Promise((resolve, reject) => {
      this.serviceClient.post(`/orders`, payload).then(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /**
   * This function will handle fetching orders from the API
   * 
   * @returns Promise - which will fetch with orders as an array
   */
   getOrders() {
    return new Promise((resolve, reject) => {
      this.serviceClient.get("orders").then(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /**
   * This function will handle fetching order by its id from the API
   * 
   * @param {string} orderId 
   * @returns Promise - which will fetch with order as an object
   */
   getOrderByOrderId(orderId) {
    return new Promise((resolve, reject) => {
      this.serviceClient.get(`/orders/${orderId}`).then(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /**
   * This function will hanlde updating an order
   * 
   * @param {string} orderId 
   * @param {object} payload - request object of the API
   * @returns Promise - which will updates the order
   */
   editOrder(orderId, payload) {
    return new Promise((resolve, reject) => {
      this.serviceClient.put(`/orders/${orderId}`, payload).then(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /**
   * This function will hanlde removing an order
   * 
   * @param {string} orderId 
   * @returns Promise - which will updates the order
   */
   removeorder(orderId) {
    return new Promise((resolve, reject) => {
      this.serviceClient.delete(`/orders/${orderId}`).then(
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