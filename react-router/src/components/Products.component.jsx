import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
class Products extends React.Component {
  state = { data: [] };
  componentDidMount() {
    this.setState({ data });
  }
  render() {
    const renderProducts = () => {
      console.log(this.props);
      return this.state.data.map((product) => {
        return (
          <Link
            to={`${this.props.location.pathname}/${product.id}`}
            key={product.id}
          >
            {product.title}
          </Link>
          //! not good practice for this application. Saving the product on the link state
          // <Link
          //   to={{
          //     pathname: `${this.props.location.pathname}/${product.id}`,
          //     state: { product },
          //   }}
          //   key={product.id}
          // >
          //   {product.title}
          // </Link>
        );
      });
    };
    return <div>{renderProducts()}</div>;
  }
}

export default Products;
