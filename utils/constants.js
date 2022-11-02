export const BASE_URL = 'https://csse-be.herokuapp.com/api';

export const ADD_TO_CART_SUBTITLE = 'Choose the amount you want';
export const ADD_TO_CART_BUTTON_TEXT = 'Add to Cart';
export const PLUS_BUTTON = '    -    ';
export const MINUS_BUTTON = '    +    ';

export const DELETE_BUTTON_TEXT = 'Remove Order';
export const EDIT = 'Save Order';
export const DELIVERED = 'Delivered';

export const ADD_BUTTON = '    +    ';
export const REMOVE_BUTTON = '    -    ';

const PROCUMENT_USER_ID = '634ea905f0c2bea76c657643';
const SUPPLIER_USER_ID = '634ea905f0c2bea76c657643';
const ADMIN_USER_ID = '634ea905f0c2bea76c657643';
const SITE_MANAGER_USER_ID = '635ecb8e4f31111a927db2ce';

export const PROCUMENT_USER = 'PROCUMENT';
export const SITE_MANAGER = 'SITE_MANAGER';
export const SUPPLIER = 'SUPPLIER';
export const ADMIN = 'ADMIN';

export const ORDER_DETAILS = 'Order Details';
export const CLOSE = 'Close';
export const NOT_ACCEPTED = 'Not Accepted';
export const ACCEPTED = 'Accepted';

export const ORDER_NOW = 'Order Now';
export const PLACE_ORDER = 'Place Order';
export const TOTAL_ITEMS = 'Total Items';
export const UNIT_PRICE = 'Unit Price';
export const QTY = 'QTY';
export const TOTAL = 'Total';
export const SELECT_QUANTITY = 'Select Quantity';
export const SEARCH_QTY = 'Search Qty';
export const SELECT_ITEM = 'Select Item';
export const SEARCH_ITEM = 'Search Items';

export const getUserId = (type) =>{
    switch(type){
        case PROCUMENT_USER:{
            return PROCUMENT_USER_ID;
        }case SITE_MANAGER:{
            return SITE_MANAGER_USER_ID;
        }case SUPPLIER:{
            return SUPPLIER_USER_ID;
        }case ADMIN:{
            return ADMIN_USER_ID;
        }
    }
}