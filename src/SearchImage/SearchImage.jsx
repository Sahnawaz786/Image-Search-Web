import "./SearchImage.css";
import React from "react";

function template() {
  return (
    <div className="search-image">
      <h3>Welcome to ImageSearch.Com</h3> <br />
      <br />
      <b>Place: </b>
      <input
        class="form-control"
        onChange={this.getname}
        type="text"
        placeholder="readonly input example"
        className="input"
      />
      <br />
      <br></br>
      <button type="button" onClick={this.sendreq} class="btn btn-primary">
        Primary
      </button>
      <br /><br />
      <div className="conta" >

      {
      
      this.state.myurls.map((obj, index) => {
        
        return  <div key={index}>
    
       {
         <div className="conta">
          <div className="card"  >
          <img src={obj.urls.full} class="card-img-top" className="img" alt="..." />
          <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
         </div>
        </div>
       }
          </div>
         })
      
      }
      </div>

    </div>
  );
}

export default template;
