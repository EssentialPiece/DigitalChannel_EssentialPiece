import ProductList from "~/components/productList";
import banner from '~/assets/images/Banner.jpg';
import { LoaderFunction } from "@remix-run/node";
import { getClient } from "~/lib/sanity/getClient";
import { useLoaderData } from "@remix-run/react";
import { ProductDocument } from "~/lib/sanity/types";

var heroStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${banner}")`
}

export const loader: LoaderFunction = async () => {
  const products = await getClient().fetch(
    `*[_type == "product"]{
      _id,
      title,
      productType,
      shortDescription,
      longDescription,
      published,
      cost,
      purchaseLink,
      feature
    }`
  );

  return {products};
}

export default function PriceIndexRoute() {
  const {products}: {products: ProductDocument[]} = useLoaderData()
  return (
    <div>
      <div className="banner-image" style={heroStyle}></div>
      <div className="container pb-5">
        <h2 className="row productList-title">Products</h2>
        <div className="row m-auto">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}