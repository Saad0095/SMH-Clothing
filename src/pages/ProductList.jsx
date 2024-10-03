import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../app/data";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { section, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const category = data.find(
      (category) => category.section.toLowerCase() === section.toLowerCase()
    );
    const subCat = category?.subcategories.find(
      (subCat) => subCat.name.toLowerCase() === subcategory.toLowerCase()
    );

    setProducts(subCat.items);
  }, []);

  return (
    <div className="flex flex-wrap justify-center mx-auto my-20">
      {products.length > 0 ? (
        products.map((item) => (
          <Link key={item.id} to={`/${section}/${subcategory}/${item.id}`}>
            <ProductCard img={item.image} name={item.name} price={item.price} />
          </Link>
        ))
      ) : (
        <div className="container mx-auto p-4">Subcategory not found</div>
      )}
    </div>
  );
};

export default ProductList;
