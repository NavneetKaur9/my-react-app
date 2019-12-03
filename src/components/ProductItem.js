import React from 'react';

export class ProductItem extends React.Component {

    render() {
        let { match, data } = this.props;
        let product = data.find(p => p.id == match.params.productId);
        let productData;

        if (product)
            productData = <div>
                <h3> {product.name} </h3>
                <p>{product.description}</p>
                <hr />
                <h4>{product.status}</h4>  </div>;
        else
            productData = <h2> Sorry. Product doesnt exist </h2>;

        return (
            <div>
                <div>
                    {productData}
                </div>
            </div>
        )
    }
}