import { ProductType } from "../enums/ProductType";
import { Product } from "../Product";

export interface ProductListProps {
    ListType: ProductType,
    Products: Array<Product>
}