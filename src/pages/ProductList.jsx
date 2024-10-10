import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../app/data";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

const ProductList = () => {
  const { section, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    JSON.parse(localStorage.getItem("currentPage")) || 1
  );
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const category = data.find(
        (category) => category.section.toLowerCase() === section.toLowerCase()
      );

      const subCat = category?.subcategories.find(
        (subCat) => subCat.name.toLowerCase() === subcategory.toLowerCase()
      );

      if (subCat) {
        setProducts(subCat.items);
      } else {
        setProducts([]);
      }

      setLoading(false);
    }, 1000);
  }, [section, subcategory]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const savedSubCat = localStorage.getItem("subcategory");
    if (savedSubCat === subcategory) {
      const savedPage = JSON.parse(localStorage.getItem("currentPage"));
      if (savedPage) {
        setCurrentPage(savedPage);
      }
    } else {
      setCurrentPage(1);
    }

    localStorage.setItem("currentPage", JSON.stringify(currentPage));
    localStorage.setItem("subcategory", subcategory);
  }, [subcategory]);

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center pt-20 pb-12 mx-auto gap-6">
      <div className="flex flex-wrap justify-center mx-auto">
        {currentPosts.length > 0 ? (
          currentPosts.map((item) => (
            <Link key={item.id} to={`/${section}/${subcategory}/${item.id}`}>
              <ProductCard
                img={item.image}
                name={item.name}
                price={item.price}
              />
            </Link>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
      <div>
        <Pagination
          totalPosts={products.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
