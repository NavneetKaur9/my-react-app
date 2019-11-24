import React from 'react';

export default class ProductItem extends React.Component {

    onDelete = () => {
        this.props.onDelete(this.props.name);
    }

    render() {
        return (
            <div>
                <span>
                    {this.props.name}
                </span>
                {` | `}
                <span>
                    {this.props.price}
                </span>
                {` | `}
                <button onClick={this.onEdit}>Edit</button>
                {` | `}
                <button onClick={this.onDelete}>Delete</button>

            </div>
        )
    }
}