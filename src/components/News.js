import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
      super();
      this.state = {
        results: []
        loading: false;
      }
  }

  async componentDidMount(){
    let url = "https://newsdata.io/api/1/latest?apikey=pub_53d480ddddcf4af1a96729837e76a8af";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({results: parsedData.results});
  }
  
  render() {
    return (
      <div className="container my-3" id="mode">
        <h2>&#9889; Trending</h2>
        <div className="row" >
        {this.state.results.map((ele)=>{
         return  <div className="col-md-4" key= {ele.article_id}>
         <NewsItem title={ele.title} description={ele.description} imageUrl={ele.image_url} newsUrl={ele.link}/>
        </div>
        })}
      </div>
      </div>
    )
  }
}

export default News
