import { Component } from "react";
import { NewsItem } from "../NewsItem/NewsItem";
import { styles } from './styles'

export class NewsList extends Component {
    render() {
        console.log(this.props.filteredNewsProp);
        return( 
            <div className="card_news-list" style={styles.body}>
                { this.props.filteredNewsProp.map(el =>(
                    <div key={ el.id }>
                        <NewsItem el={ el }/>
                    </div>
                )) }
            </div>
            
        )
    }
}