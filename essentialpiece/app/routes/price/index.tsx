import ProductList from "~/components/productList";
import banner from '~/assets/images/Banner.jpg';
import { ProductType } from "~/models/enums/ProductType";
import { Product } from "~/models/Product";

var heroStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${banner}")`
}

// Featured Monthly Products should be in the middle
let monthlyProducts: Array<Product> = [
  new Product("The Platinum", "Some long descriptoin describing the product being used", 12, ProductType.Monthly, "", false),
  new Product("The Diamond", "Some long descriptoin describing the product being used", 12, ProductType.Monthly, "", true),
  new Product("The Radiant", "Some long descriptoin describing the product being used", 12, ProductType.Monthly, "", false)
];

// Featured Onetime products should be ordered first
let onetimeProducts: Array<Product> = [
  new Product("4 Week Body Weight Challenge", "Some long descriptoin describing the product being used", 12, ProductType.Monthly, "", false),
  new Product("4 Week Kettlebell Challenge", "Some long descriptoin describing the product being used", 12, ProductType.Monthly, "", false),
  new Product("4 Week Dumbbell Challenge", "Some long descriptoin describing the product being used", 12, ProductType.Monthly, "", false)
];

const monthlyProductList = {
  ListType: ProductType.Monthly,
  Products: monthlyProducts
}

const onetimeProductList = {
  ListType: ProductType.OneTime,
  Products: onetimeProducts
}


export default function PriceIndexRoute() {
  return (
    <div>
      <div className="banner-image" style={heroStyle}></div>
      <div className="container">
        <h2 className="row productList-title">Featured Products</h2>
        <div className="row m-auto">
          <ProductList {...monthlyProductList} />
        </div>

        <h2 className="row productList-title">All Products</h2>
        <div className="row m-auto">
          <ProductList {...onetimeProductList} />
        </div>
      </div>
    </div>
  );
}