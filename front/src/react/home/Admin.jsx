import React from "react";
import banner from "../../img/banner_listado.png";
import {
  BannerWeb,
  ProductsContainer,
  Card,
  Img,
  Icon,
  IconContainer,
  BannerImg,
} from "./style";
import { IoIosAddCircle } from "react-icons/io";

const Admin = ({ products, handleAdd, handleDelete, handleEdit }) => {
  const iconStyle = {
    margin: "70px",
  };

  return (
    <>
      <BannerWeb>
        <BannerImg src={banner} />
      </BannerWeb>
      <ProductsContainer>
        {products.map((product) => (
          <Card key={product.id}>
            <Img src={product.image} />
            {product.name}
            <br></br>
            Price: ${product.price}
            <IconContainer>
              <Icon
                className="fa fa-trash"
                onClick={() => handleDelete(product.id)}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Borrar producto"
              />
              <Icon
                className="fa fa-pencil"
                onClick={() => handleEdit(product.id)}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Editar producto"
              />
            </IconContainer>
          </Card>
        ))}
        <IoIosAddCircle onClick={handleAdd} style={iconStyle} size={30} data-toggle="tooltip" data-placement="bottom" title="Agregar producto"/>
      </ProductsContainer>
    </>
  );
};

export default Admin;
