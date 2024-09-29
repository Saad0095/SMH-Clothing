import React from "react";
import { Link, useParams } from "react-router-dom";
import { Men } from "../app/data";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { category } = useParams();
  const products = Men;
  // console.log(Men);

  return (
    <>
    <Link to={`product-detail${products.id}`}>
    <div className="flex flex-wrap justify-center mt-12">
      
      {products.map((items) => {
        return (
          <ProductCard
            key={items.id}
            // id={items.id}
            img={items.image}
            name={items.name}
            price={items.price}
          />
         
        );
      })}
    </div>
    </Link>

        </>

  );
};

export default ProductList;

// {
//   products.map((product)=>(
//   <div key={product.id}>
//    <h1>{product.name}</h1>
//    <h3>{product.color}</h3>
//   </div>
//  ))
// }
