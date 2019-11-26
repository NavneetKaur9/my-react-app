import React from 'react';

export default class AddProduct extends React.Component {

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddProduct(this.nameInput.value, this.priceInput.value);
        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    nameRef = (inputRef)=>{
        return this.nameInput = inputRef;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h4> Add Product</h4>
                    <input placeholder="Name" ref={this.nameRef} />
                    <input placeholder="Price" ref={inputRef => this.priceInput = inputRef} />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}