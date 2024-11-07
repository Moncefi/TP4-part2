import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : IProduct[]=[];
  
  constructor() { }
}
