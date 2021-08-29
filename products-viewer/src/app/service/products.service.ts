import { Injectable } from '@angular/core';
import { IProduct } from '../model/product';
import { IBenefit } from '../model/benefit';
import * as response  from './../../assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

    getBenefits(): IBenefit[] {
        let apiResult = JSON.parse(JSON.stringify(response));
        let benefits: IBenefit[] = [];
        Object.keys(apiResult).forEach(key => { 
            if(!!apiResult[key].benefit) {
                let products: IProduct[] = [];
                products =  this.mapProducts(apiResult[key].benefit);
                benefits.push({products: products});
            }
        })
        return benefits;
    }

    mapProducts(response: any): IProduct[] {
        const productNames = Object.getOwnPropertyNames(response);
        let result: IProduct[] = [];
        productNames.forEach(name => {
            let product:IProduct;
            if(!!response[name] && !response[name].current) {
                let childProducts = response[name];
                let childNames = Object.getOwnPropertyNames(childProducts);
                childNames.forEach(name => {
                    product = {
                        name,
                        current: childProducts[name].current,
                        enriched: childProducts[name].enriched,
                        typeOfChange: childProducts[name].typeOfChange
                    }
                    result.push(product);
                })
            } else {        
                product = {
                    name,
                    current: response[name].current,
                    enriched: response[name].enriched,
                    typeOfChange: response[name].typeOfChange
                }
                result.push(product);
            }
        });
        return result;
    }
}
