import "./App.css";
import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const[progress, setProgress] = useState(0)

  
    return (
      <Router>
        <NavBar />
         <LoadingBar
         height = {3}
        color="#e76f1a"
        progress={progress}
      />
        <div>
          <Routes>
            <Route
              exact
              path="/Home"
              element={
                <News setProgress={setProgress}
                  key="general"
                  pageSize={pageSize} 
                  apiKey={apiKey}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/Buisness"
              element={
                <News setProgress={setProgress}
                  key="buisness"
                  pageSize={pageSize}
                  apiKey={apiKey}
                  country="us"
                  category="buisness"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News setProgress={setProgress}
                  key="entertainment"
                  pageSize={pageSize} 
                  apiKey={apiKey}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News setProgress={setProgress}
                  key="health"
                  pageSize={pageSize} 
                  apiKey={apiKey}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News setProgress={setProgress}
                  key="science"
                  pageSize={pageSize} 
                  apiKey={apiKey}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News setProgress={setProgress}
                  key="sports"
                  pageSize={pageSize} 
                  apiKey={apiKey}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News setProgress={setProgress}
                  key="technology"
                  pageSize={pageSize} 
                  apiKey={apiKey}
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

export default App;
