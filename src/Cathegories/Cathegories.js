import { Component } from 'react';

export class Cathegories extends Component {
    render() {
        let { cathegories } = this.props
        return(
            <>
                { cathegories.map( category => (
                    <ul className="categories-list" key={ category.id }>
                        <li className="categories-item">
                            { category.name }
                        </li>
                    </ul>
                )) }
            </>
        )
    }
}