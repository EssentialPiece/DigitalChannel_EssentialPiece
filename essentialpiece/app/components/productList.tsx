import purchaseButton from '~/assets/images/btn_purchase.svg';
import purchaseButtonFeatured from '~/assets/images/btn_purchase_featured.svg';
import { ProductDocument } from "~/lib/sanity/types";


export function ButtonStyle(isFeatured: boolean) {
    var buttonStyle = {
        background: `url("${isFeatured ? purchaseButtonFeatured : purchaseButton}") no-repeat`
    }

    return buttonStyle;
}

export default function ProductList({products}: {products: ProductDocument[]}) {
    var currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (
        <div className="row m-auto justify-content-center">
            {products?.map(item =>
                // additional classname based on product type
                <div className="col-md-4 product-wrapper" key={item._id}>
                    <div className={`product-card p-3 ${item.feature ? "product-featured" : ""} shadow`}>
                        <div className="container product-container d-flex flex-column">
                            <div className="product-title">
                                {item.title}
                            </div>
                            <div className="product-description">
                                <div className="product-content-bottom">
                                    {item.shortDescription}
                                </div>

                            </div>
                            <div className="product-price">
                                <div className="product-content-bottom">
                                    <div className="container g-0">
                                        <div className="row m-auto">
                                            {currencyFormat.format(item.cost)} USD
                                        </div>
                                        <div className="row m-auto product-price-subtext text-capitalize">
                                            {item.productType == "monthly" ? "Monthly" : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-purchase">
                                <div className="product-content-bottom w-100">
                                    <a href={item.purchaseLink} className="product-purchase-button" style={ButtonStyle(item.feature)}></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}