import React from "react";
import data from "../data";

import Card from "./Card.component";
class ProductDetail extends React.Component {
  state = { product: null };
  componentDidMount() {
    // console.log(this.props.location.state.product);
    const id = Number(this.props.match.params.id);
    const findProduct = data.find((item) => {
      return item.id === id;
    });
    if (!findProduct) {
      //!if there isn't that product redirect to somewhere else. Better to a component that says product not found
      this.props.history.push("/products");
    }
    this.setState({ product: findProduct });
  }
  render() {
    return (
      <div>{this.state.product && <Card data={this.state.product} />}</div>
    );
  }
}
export default ProductDetail;
