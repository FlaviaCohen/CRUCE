import React from "react";
import Admin from "./Admin";
import { connect } from "react-redux";
import { getProducts, deleteProduct, getProduct } from "../../redux/actions/products";

class AdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  handleAdd() {
    this.props.history.push("/add-product");
  }

  handleDelete(id) {
    this.props.deleteProduct(id)
  }

  handleEdit(id) {
    this.props.getProduct(id)
    this.props.history.push("/edit-product")
  }

  render() {
    return (
        <Admin
          products={this.props.products}
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    },
    deleteProduct: (id) => {
      dispatch(deleteProduct(id))
    },
    getProduct: (id) => {
      dispatch(getProduct(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
