import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  
  static defaultProps = {
     country: "us",
     pageSize: 5,
     category: "general"
  }

  static propTypes = {
     country: PropTypes.string,
     pageSize: PropTypes.number,
     category: PropTypes.string
  }


  capitalizeFirstLetter (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
  }


  constructor(props){
      super(props);
      this.state = {
        articles: [],
        loading: false,
        page: 1
      }
      document.title = `NewsInd - ${this.capitalizeFirstLetter(this.props.category)}`
  }


  async updateNews () {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=f9ed0711bae34c07983ef27e09131095&pageSize=${this.props.pageSize}`;
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

  
  async componentDidMount(){
    this.updateNews();
  }

  nextPage = async ()=>{
    if(this.state.page+1 > Math.ceil(`${this.state.totalResults}/${this.props.pageSize}`)){

    }
    else{
     this.setState({
      page: this.state.page + 1,
     })
     this.updateNews();
    }
  }

   prevPage = async ()=>{
     this.setState({
      page: this.state.page - 1,
     })
     this.updateNews();
  }
  
  render() {
    return (
      <div className="container my-3" id="mode">
        <h2 className="my-2">&#9889; Trending</h2> 
        {this.state.loading && <Spinner/>}
        <div className="row" >
        {!this.state.loading && this.state.articles.map((ele)=>{
         return  <div className="col-md-4 my-3" key= {ele.url}>
         <NewsItem title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
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
