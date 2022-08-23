import { ProductType } from "~/models/enums/ProductType";
import { ProductListProps } from "~/models/interfaces/ProductListProps";
import { Product } from "~/models/Product";
import purchaseButton from '~/assets/images/btn_purchase.svg';
import purchaseButtonFeatured from '~/assets/images/btn_purchase_featured.svg';


export function ButtonStyle(isFeatured: boolean) {
    var buttonStyle = {
        background: `url("${isFeatured ? purchaseButtonFeatured : purchaseButton}") no-repeat`
    }

    return buttonStyle;
}

export default function ProductList(props: ProductListProps) {

    var currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    //Function to get products from API

    return (
        <div className="row m-auto justify-content-center">
            {props.Products.map(item =>
                // additional classname based on product type
                <div className="col-md-4 product-wrapper">
                    <div className={`product-card p-3 ${item.isFeatured ? "product-featured" : ""}`}>
                        <div className="container product-container d-flex flex-column">
                            <div className="product-title">
                                {item.title}
                            </div>
                            <div className="product-description">
                                <div className="product-content-bottom">
                                    {item.description}
                                </div>

                            </div>
                            <div className="product-price">
                                <div className="product-content-bottom">
                                    <div className="container g-0">
                                        <div className="row m-auto">
                                            {currencyFormat.format(item.price)} USD
                                        </div>
                                        <div className="row m-auto product-price-subtext">
                                            Monthly
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-purchase">
                                <div className="product-content-bottom w-100">
                                    <button className="product-purchase-button" style={ButtonStyle(item.isFeatured)}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}