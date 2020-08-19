import React from "react";
import { FormContainer, Button } from "./style";

const Form = ({
  handleChange,
  handleSubmit,
  handleClick,
  handleEnable,
  imageInput,
  nameInput,
  priceInput,
}) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group">
          <label>URL de la imagen</label> 
          <input
            onChange={handleChange}
            className="form-control"
            type="url"
            name="image"
            value={imageInput}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label>Nombre del producto</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="name"
            value={nameInput}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label>Precio</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="number"
            name="price"
            value={priceInput}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <Button
              disabled={handleEnable(imageInput, nameInput, priceInput)}
              type="submit"
              className="btn btn-primary"
            >
              Guardar
            </Button>
            <Button
              onClick={handleClick}
              type="submit"
              className="btn btn-light"
            >
              Volver
            </Button>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default Form;
