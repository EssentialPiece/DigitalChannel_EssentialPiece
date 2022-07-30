import { ProductType } from "~/models/enums/ProductType";
import { Product } from "~/models/Product";

export default function ProductList() {
    let products: Array<Product> = [
        new Product("The Radiant", "Some long descriptoin describing the product being used", 12, ProductType.Monthly, "", false)
    ];

    var currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    //Function to get products from API

    return (
        <div className="container">
            {products.map(item =>
                // additional classname based on product type
                <div className={`product-card ${item.isFeatured ? "product-featured": ""}`}>
                    <div className="row">
                        {item.title}
                    </div>
                    <div className="row">
                        {item.description}
                    </div>
                    <div>
                        {currencyFormat.format(item.price)}
                    </div>
                    <div>
                    //Buy Button
                    </div>
                </div>
            )}
        </div>
    );
}