import "../App.css";
import { Component } from "react";
import news from "../news.json";
import { NewsFilters } from "../NewsFilters";
import { NewsList } from "../NewsList/NewsList";

export class NewsPage extends Component {
  state = {
    hasPhoto: false,
    hasLink: false,
    isSpecial: false,
    value: "",
  };

  handlePhoto = () => {
    this.setState({
      hasPhoto: !this.state.hasPhoto,
    });
  };

  handleLink = () => {
    this.setState({
      hasLink: !this.state.hasLink,
    });
  };

  handleSpecial = () => {
    this.setState({
      isSpecial: !this.state.isSpecial,
    });
  };

  handleSeach = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { hasPhoto, hasLink, isSpecial, value } = this.state
    const filteredNews = news.filter(el => {
      if(hasPhoto && !el.photo) return false
      if(hasLink && !el.link) return false
      if(isSpecial && !el.isSpecial) return false
      if(!el.title.toLowerCase().includes(value.toLowerCase())) return false
      return true;
    })
    return (
      <>
        <NewsFilters 
          currentState={ this.state }
          handleLink={ this.handleLink }
          handlePhoto={ this.handlePhoto }
          handleSpecial={ this.handleSpecial }
          handleSeach={ this.handleSeach } 
        />
      <NewsList filteredNewsProp={ filteredNews }/>
      </>
    );
  }
}
