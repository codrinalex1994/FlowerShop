import { Product } from '../_models/product';

export const PRODUCTS: Product[] = [
    { id: '1', name: 'Rose', description: 'red, white and other colors available'},
    { id: '2', name: 'Daisy', description: 'red, white and other colors available'},
    { id: '3', name: 'Sunflower', description: 'without seeds, is not to eat'},
    { id: '4', name: 'Tulip', description: 'not only on spring time'},
    { id: '5', name: 'Lilies', description: 'red, white and other colors available'},
];

export const PRODUCT_IDS: string[] = PRODUCTS.map( product => product.id );