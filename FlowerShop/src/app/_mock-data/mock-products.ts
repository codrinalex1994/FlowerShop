import { Product } from '../_models/product';

export var PRODUCTS: Product[] = [
    { id: '1', name: 'Rose', description: 'red, white and other colors available', img_url: 'https://images.unsplash.com/photo-1531874824027-2a0d33bd6338?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', specie: 'rose'},
    { id: '2', name: 'Daisy', description: 'red, white and other colors available', img_url: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80', specie: 'daisy'},
    { id: '3', name: 'Sunflower', description: 'without seeds, is not to eat', specie: 'sunflower'},
    { id: '4', name: 'Tulip', description: 'not only on spring time', img_url: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', specie: 'tulip'},
    { id: '5', name: 'Lilies', description: 'red, white and other colors available', specie: 'lilies'},
];

export const PRODUCT_IDS: string[] = PRODUCTS.map( product => product.id );