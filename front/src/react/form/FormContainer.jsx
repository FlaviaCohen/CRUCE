import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import {
  addProduct,
  editProduct,
  cleanProduct,
} from "../../redux/actions/products";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInput: this.props.image,
      nameInput: this.props.name,
      priceInput: this.props.price,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnable = this.handleEnable.bind(this);
  }

  componentDidMount() {
    const { product, image, name, price } = this.props;
    product.id
      ? this.setState({
          imageInput: image,
          nameInput: name,
          priceInput: price,
        })
      : null;
  }

  componentDidUpdate(prevProps) {
    const { product, image, name, price } = this.props;
    if (product !== prevProps.product) {
      this.setState({
        imageInput: image,
        nameInput: name,
        priceInput: price,
      });
    }
  }

  handleChange(event) {
    const value = event.target.value;
    switch (event.target.name) {
      case "image":
        return this.setState({ imageInput: value });
      case "name":
        return this.setState({ nameInput: value });
      case "price":
        return this.setState({ priceInput: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.props.product.id) {
      this.props.addProduct({
        image: this.state.imageInput,
        name: this.state.nameInput,
        price: this.state.priceInput,
      });
    } else {
      this.props.editProduct(this.props.product.id, {
        image: this.state.imageInput,
        name: this.state.nameInput,
        price: this.state.priceInput,
      });
    }
    this.props.cleanProduct();
    this.props.history.push("/admin-products");
  }

  handleClick() {
    this.props.cleanProduct();
    this.props.history.push("/admin-products");
  }

  handleEnable(image, name, price) {
    if (!image || !name || !price) {
      return true;
    }
    return false;
  }

  render() {
    const { imageInput, nameInput, priceInput } = this.state;
    return (
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClick={this.handleClick}
        handleEnable={this.handleEnable}
        imageInput={imageInput}
        nameInput={nameInput}
        priceInput={priceInput}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.productReducer.product,
    image: state.productReducer.product.image,
    name: state.productReducer.product.name,
    price: state.productReducer.product.price,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProduct(product));
    },
    editProduct: (id, product) => {
      dispatch(editProduct(id, product));
    },
    cleanProduct: () => {
      dispatch(cleanProduct());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
