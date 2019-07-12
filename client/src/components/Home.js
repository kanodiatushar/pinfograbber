import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    products: [],
    type: null,
    url: null,
    count: null
  };
  handleUrlChange = e => {
    this.setState({
      url: e.target.value
    });
  };
  handleTypeChange = e => {
    this.setState({
      type: e.target.value
    });
  };
  handleOaLSubmit = e => {
    e.preventDefault();
    this.LoadAPI(this.state.url);
  };
  handleTypeSubmit = e => {
    e.preventDefault();
    this.LoadProductsAPI(this.state.type);
  };
  LoadAPI = url => {
    let urlstring = "/api/productlist?" + url;
    axios.get(urlstring).then(res => {
      this.setState({
        products: res.data
      });
    });
  };
  LoadProductsAPI = url => {
    let urlstring = "/api/product?" + url;
    axios.get(urlstring).then(res => {
      this.setState({
        products: res.data
      });
    });
  };
  render() {
    const { products } = this.state;
    const prodList = products.length ? (
      products.map(product => {
        return (
          <tr>
            <td>{product.name}</td>
            <td>{product.code}</td>
            <td>{product.price}</td>
            <td>{product.date}</td>
            <td>{product.type}</td>
          </tr>
        );
      })
    ) : (
      <tr>Kindly Load The API</tr>
    );
    return (
      <div className="container">
        <div>
          <h1 className="center red-text">Welcome!!</h1>
          <br />
          <h4 className="center blue-text text-darken-3">
            Kindly visit{" "}
            <a
              href="https://github.com/kanodiatushar/pinfograbber"
              className="red-text"
            >
              Github
            </a>{" "}
            to get more information about this page. :)
          </h4>
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col s12 m4">
            <form onSubmit={this.handleOaLSubmit}>
              <label>
                <h5 className="blue-text text-darken-3">Limit&Offset</h5>
              </label>
              <input
                className="black-text"
                type="text"
                required
                pattern=".*\S+.*"
                title="Queries for /api/productlist?"
                onChange={this.handleUrlChange}
              />
              <button className="btn-flat waves-effect green">Submit</button>
            </form>
          </div>
          <div className="col s12 m4" />
          <div className="col s12 m4">
            <form onSubmit={this.handleTypeSubmit}>
              <label>
                <h5 className="blue-text text-darken-3">Type,Limit&Offset</h5>
              </label>
              <input
                className="black-text"
                type="text"
                required
                pattern=".*\S+.*"
                title="Queries for /api/product?"
                onChange={this.handleTypeChange}
                value={this.state.type}
              />
              <button className="btn-flat waves-effect green ">Submit</button>
            </form>
          </div>
        </div>
        <div className="center">
          <br />
          <br />
          <button
            className="btn-flat waves-effect green"
            title="Loads /api/productlist?limit=20"
            onClick={this.LoadAPI}
          >
            Load API
          </button>
        </div>

        <table className="highlight">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Code</th>
              <th>Price</th>
              <th>Purchase Date</th>
              <th>Product Type</th>
            </tr>
          </thead>
          <tbody>{prodList}</tbody>
        </table>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Home;
