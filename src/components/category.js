import React from 'react';
import { Link, Route } from "react-router-dom";

class Category extends React.Component {

    render() {
        let {match} = this.props;

        return (
            <div >
                This is Category Component
               <ul>
                    <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
                    <li><Link to={`${match.url}/boots`}>Boots</Link></li>
                    <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>
                </ul>

                <Route path={`${match.path}/:name`}
                    render={({ match }) => (

                        <div>
                            {console.log(match)}
                            <h3> {match.params.name} </h3>
                        </div>
                    )}
                />

            </div>
        );
    }
}

export default Category;