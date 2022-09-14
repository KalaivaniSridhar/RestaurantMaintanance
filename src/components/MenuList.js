import React, { useState, useEffect } from "react";
import "./MenuItem.css";
import { categories_Data } from "./Data"
import { FaTrash } from "react-icons/fa";
import { Alert } from "react-bootstrap";
const MenuItem = ({ categories_Data }) => {
  const [list, setList] = React.useState(categories_Data);

  function handleRemove(id) {
    setList(categories_Data => categories_Data.filter((data) => data.idCategory != id))

  }

  return (

    <div className="menu-list">
      <h2 className="header-title">Menu</h2>
      <div className="row">
        {list?.map((item, index) => {
          return (
            <>

              <div className="list-view" key={index}>

                <FaTrash onClick={() => handleRemove(item.idCategory)} className="delete-align" />


                <img src={item.strCategoryThumb
                } className="list-img" />

                {
                  <p className="rate">
                    AED.{item.idCategory}
                    {item.strMealThumb}
                  </p>
                }
                <div className="menu">
                  <p className="title">{item.strCategory}</p>
                  <p className="Desc-style">{item.strCategoryDescription}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItem;
