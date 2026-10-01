import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3" id="item">
      <div className="card" style={{ width: "18rem" }}>
        <div className="sou">
          <span className="badge rounded-pill bg-dark"> {source} </span>
        </div>
        <img
          src={imageUrl ? imageUrl : "https://media.istockphoto.com/id/1401803517/vector/vector-city-newspaper-layout.jpg?s=612x612&w=0&k=20&c=zVIhB2HnxALS6a7DvPqClh1nyU1pNPcFOTMUbadnogU="}
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            By {!author ? "Ghost" : author} on {new Date(date).toGMTString()}
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn"
            id="show"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
