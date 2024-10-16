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
  const [sortOption, setSortOption] = useState("none");

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

  const getSortedProducts = () => {
    let sortedProducts = [...products];
    if (sortOption === "lowToHigh") {
      sortedProducts = sortedProducts.sort(
        (x, y) => parseFloat(x.price) - parseFloat(y.price)
      );
    } else if (sortOption === "highToLow") {
      sortedProducts = sortedProducts.sort(
        (x, y) => parseFloat(y.price) - parseFloat(x.price)
      );
    }
    return sortedProducts;
  };

  const sortedProducts = getSortedProducts();
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = sortedProducts.slice(firstPostIndex, lastPostIndex);

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
      <div className="container mr-16 flex justify-end items-center gap-4">
        <p className="font-bold">SORT BY: </p>
        <div>
          <select
            value={sortOption}
            className="border-b-2 outline-none w-40 text-center border-gray-900 dark:border-white bg-inherit"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="none" className="dark:text-black">
              None
            </option>
            <option value="lowToHigh" className="dark:text-black">
              Low To High (Price)
            </option>
            <option value="highToLow" className="dark:text-black">
              High To Low (Price)
            </option>
          </select>
        </div>
      </div>
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
          totalPosts={sortedProducts.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
