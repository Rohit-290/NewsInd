import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  document.title = `NewsInd - ${capitalizeFirstLetter(props.category)}`;

  function capitalizeFirstLetter (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async function updateNews () {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
     props.setProgress(100);
  }
 
  useEffect(() => {
    updateNews();
  }, [])
  


  async function fetchMoreData (){
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  
    return (
      <>
        <h2 className="my-2">&#9889; Trending</h2>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<spinner/>}
        >
          <div className="container">
            <div className="row">
              {articles.map((ele) => {
                return (
                  <div className="col-md-4 my-2" key={ele.url}>
                    <NewsItem
                      title={ele.title}
                      description={ele.description}
                      imageUrl={ele.urlToImage}
                      newsUrl={ele.url}
                      author={ele.author}
                      date={ele.publishedAt}
                      source={ele.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }


  News.defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;

