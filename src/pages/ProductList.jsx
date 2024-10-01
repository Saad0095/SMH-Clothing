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
    
    <div className="flex flex-wrap justify-center mt-12">
      
      {products.map((items) => {
        return (
          <Link to={`/products/${category}/${items.id}`}>
          <ProductCard
            key={items.id}
            // id={items.id}
            img={items.image}
            name={items.name}
            price={items.price}
          />
          </Link>
        );
      })}
    </div>
    

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
