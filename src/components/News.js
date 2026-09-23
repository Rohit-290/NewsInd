import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
      super();
      this.state = {
        results: [],
        loading: false,
        page: ""
      }
  }

  async componentDidMount(){
    let url = "https://newsdata.io/api/1/latest?apikey=pub_8c68a2f176db4447a77fa9384ba418a6&country=in,gb,us,sa,au&language=en&image=1&video=0";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: parsedData.nextPage ,
      results: parsedData.results});
  }

  nextPage = async ()=>{
    let url = `https://newsdata.io/api/1/latest?apikey=pub_8c68a2f176db4447a77fa9384ba418a6&country=in,gb,us,sa,au&language=en&image=1&video=0&page=${this.state.page}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        page: parsedData.nextPage,
        results: parsedData.results
       }
       )
  }

   prevPage = async ()=>{
    let url = `https://newsdata.io/api/1/latest?apikey=pub_53d480ddddcf4af1a96729837e76a8af&country=in,gb,us,sa,au&language=en&image=1&video=0&page=${this.state.page}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        page: parsedData.nextPage ,
        results: parsedData.results
       }
       )
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
      <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark" onClick={this.prevPage}>Previous</button>
        <button type="button" class="btn btn-dark"onClick={this.nextPage}>Next</button>
      </div>
      </div>
    )
  }
}

export default News
