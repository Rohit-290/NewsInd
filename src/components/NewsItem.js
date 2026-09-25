import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3" id="item">
        <div className="card" style={{"width": "18rem"}}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"> {source} </span>
        <img src={imageUrl?imageUrl:"/news-placeholder.jpg"} className="card-img-top" alt="News"/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text">By {!author?"Ghost":author} on {new Date(date).toGMTString()}</p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
