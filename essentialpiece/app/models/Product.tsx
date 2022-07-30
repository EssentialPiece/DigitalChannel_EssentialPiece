
import { ProductType } from "./enums/ProductType";
export class Product {
    title: string;
    description: string;
    price: number;
    productType: ProductType;
    buyLink: string;
    isFeatured: boolean;


    constructor(title:string, description:string, price:number, productType:ProductType, buyLink:string, isFeatured:boolean)
    {
        this.title = title;
        this.description = description;
        this.price = price;
        this.productType = productType;
        this.buyLink = buyLink;
        this.isFeatured = isFeatured;
    }
}