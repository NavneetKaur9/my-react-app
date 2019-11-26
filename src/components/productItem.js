import React from 'react';

export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }
    onDelete = () => {
        this.props.onDelete(this.props.name);
    }

    onEdit = () => {
        this.setState({
            isEdit: true
        });
    }
    
    onEditSubmit=(e)=>{
        e.preventDefault();
        this.props.onEditSubmit(this.nameInput.value,this.priceInput.value,this.props.name);
        this.setState({
            isEdit:false
        })
    }

    render() {
        return (
            <div>
                {this.state.isEdit ?
                    (
                        <form onSubmit={this.onEditSubmit}>
                            <input placeholder="Name" ref={inputRef => this.nameInput = inputRef} defaultValue={this.props.name}/>
                            <input placeholder="Price" ref={inputRef => this.priceInput = inputRef} defaultValue={this.props.price}/>
                            <button>Save</button>
                        </form>
                    )
                    :
                    (<div>
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
                    </div>)
                }
            </div>
        )
    }
}