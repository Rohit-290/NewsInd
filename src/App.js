import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <Router>
        <NavBar />
         <LoadingBar
         height = {3}
        color="#e76f1a"
        progress={this.state.progress}
      />
        <div>
          <Routes>
            <Route
              exact
              path="/Home"
              element={
                <News setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/Buisness"
              element={
                <News setProgress={this.setProgress}
                  key="buisness"
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country="us"
                  category="buisness"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
