import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3" id="item">
        <div className="card" style={{"width": "18rem"}}>
        <img src={imageUrl?imageUrl:"news-placeholder.jpg"} class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <button><a href={newsUrl} target="_blank" class="btn btn-primary">Read More</a></button>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
