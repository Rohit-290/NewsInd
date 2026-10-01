import React from "react";
import loading from "./loading.gif";

const Spinner = () => {

return (
      <div className="my-3">
        <img src={loading} alt="loading"></img>
      </div>
    );
}

export default Spinner