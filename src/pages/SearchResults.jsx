import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../app/data";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../context/SearchContext";

const SearchResults = () => {
  const { searchQuery } = useSearch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const allProducts = data.flatMap((category) =>
        category.subcategories.flatMap((subCat) =>
          subCat.items.map((item) => ({
            ...item,
            section: category.section,
            subcategory: subCat.name,
          }))
        )
      );

      const searchedProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setProducts(searchedProducts);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-wrap justify-center mx-auto my-20">
      {products.length > 0 ? (
        products.map((item) => (
          <Link
            key={item.id}
            to={`/${item.section}/${item.subcategory}/${item.id}`}
          >
            <ProductCard img={item.image} name={item.name} price={item.price} />
          </Link>
        ))
      ) : (
        <div className="container mx-auto p-4">
          No results found for "{searchQuery}". Check the spelling or use a
          different word or phrase.
        </div>
      )}
    </div>
  );
};

export default SearchResults;
