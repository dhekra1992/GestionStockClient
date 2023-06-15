import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';
@Injectable()
export class ProduitMockService{
private PRODUITS: Produit[]= [];
constructor(){
    let p1:Produit=new Produit('livre', 50, 200);
    let p2:Produit=new Produit('pc', 40, 1200);
    let p3:Produit=new Produit('mobile', 550, 2700);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
}

public getProduits():Produit[] {
    return this.PRODUITS;
}

}