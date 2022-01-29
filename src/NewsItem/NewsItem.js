import { Component } from "react";
import { Cathegories } from "../Cathegories";
import {styles} from './styles'

export class NewsItem extends Component {
  render() {
    let { el } = this.props;
     return (
      <div className="card__container" style={ styles.container }>
        <h2 className="card__title">{el.title}</h2>
        <p
          className="card__content"
          dangerouslySetInnerHTML={{ __html: el.content }}
        ></p>
        { el.isSpecial && <p className="special-news"> this news is special!!</p> }
        <p className="date"> { el.dateCreated } </p>
        <Cathegories cathegories={ el.categories }/>
        { el.link && <a href={ el.link } className="news-link">LInk!!</a> }
        { el.photo && <img src={ el.photo } alt=" " className="news-poster" /> }
        <p className="news-author"> { el.author } </p>
      </div>
    );
  }
}
