import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  
  constructor(){
      super();
      this.state = {
        articles: [],
        loading: false,
        page: 1
      }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f9ed0711bae34c07983ef27e09131095&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles ,
      totalResults: parsedData.totalResults,
      loading: false
    }
  )
  }

  nextPage = async ()=>{
    if(!this.state.page+1 > Math.ceil(`${this.state.totalResults}/${this.props.pageSize}`)){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f9ed0711bae34c07983ef27e09131095&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        articles: parsedData.articles ,
        page: this.state.page + 1,
        
       }
      )
    }
  }

   prevPage = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f9ed0711bae34c07983ef27e09131095&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
  
       }
       )
  }
  
  render() {
    return (
      <div className="container my-3" id="mode">
        <h2>&#9889; Trending</h2> 
        {this.state.loading && <Spinner/>}
        <div className="row" >
        {this.state.articles.map((ele)=>{
         return  <div className="col-md-4" key= {ele.url}>
         <NewsItem title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl={ele.url}/>
        </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={this.prevPage} disabled={this.state.page<=1}>Previous</button>
        <button type="button" className="btn btn-dark"onClick={this.nextPage} disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}>Next</button>
      </div>
      </div>
    )
  }
}

export default News
