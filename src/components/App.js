import React from 'react';
import './App.scss';
import ProductItem from './productItem';
import AddProduct from './AddProduct';

let products = [{
    name: 'iPad',
    price: 200
}, {
    name: 'kindle',
    price: 500
}];

localStorage.setItem('products', JSON.stringify(products));

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: JSON.parse(localStorage.getItem('products'))
        };
    }

    componentDidMount() {
        let products = this.getProducts();
        this.setState({ products });
    }

    getProducts = () => {
        return this.state.products;
    }

    onDelete = (name) => {
        let products = this.getProducts();
        let filteredProducts = products.filter(product => {
            return product.name !== name
        });

        this.setState({
            products: filteredProducts
        })
    }

    onAdd = (name, price) => {
        console.log(name, price);
        let products = this.getProducts();
        products.push({ name, price });
        this.setState({
            products
        });
    }

    onEdit = (editedName, editedPrice, originalName) => {
         let products = this.getProducts();
        products = products.map(product => {
            if (product.name === originalName) {
                product.name = editedName;
                product.price = editedPrice;
            }

            return product;
        });

        this.setState({
            products
        })
    }

    render() {
        let displayProducts = this.state.products.map((product, index) => {
            return (
                <div key={index}>
                    <ProductItem
                        name={product.name}
                        price={product.price}
                        onDelete={this.onDelete}
                        onEditSubmit={this.onEdit}
                    />
                </div>
            )
        });

        return (
            <div className="App">
                <h1>Products Manager</h1>
                <br />
                <AddProduct onAddProduct={this.onAdd} />
                <hr />
                {displayProducts}
            </div>
        );
    }
}

export default App;