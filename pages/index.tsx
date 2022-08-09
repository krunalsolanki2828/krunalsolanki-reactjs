import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { getallCategories, getallProducts } from "utils/api";
import { Product, Category } from "interfaces";
import Button from "components/Button";
import Header from "components/Header";
import ProductCard from "components/ProductCard";

const Dashboard = ({ PRODUCTS, CATEGORIES }) => {
  const [filterProduct, setFilterProduct] = useState(PRODUCTS);
  const [filter, setFilter] = useState("");

  useEffect(() => {    
    if (filter) {
      let data = PRODUCTS?.filter((product) => product.category === filter);
      setFilterProduct(data);

    } else {
      setFilterProduct(PRODUCTS);
    }
  }, [filter]);


  return (
    <div className="min-h-screen container mt-6 mx-auto relative">
      <Header />
      <div className="flex flex-col justify-between mt-3 px-4 md:flex-row md:gap-2">
        <input
          placeholder="Apple Watch, Samsung S21, Macbook Pro...."
          className="w-full lg:w-[30%] input-base mb-2 md:mb-0"
        />
        <div className="select-base w-full lg:w-[15%]">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full transition ease-in-out focus:outline-none bg-white"
            aria-label="Default select example"
          >
            <option selected value="">
              All Categories
            </option>
            {CATEGORIES?.map((cat: Category, cIndex: number) => {
              return (
                <option key={cIndex}  value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* list */}
      {!filterProduct?.length && (
        <div className="text-center font-bold text-2xl text-re-500 mt-20">
          No Products Found for {filter}
        </div>
      )}
      <div className="px-4 my-9 grid grid-cols-2 gap-10 lg:grid-cols-4 md:grid-cols-3 lg:px-[15%]">
        {filterProduct.map((item: Product, index: number) => {
          return (
            <ProductCard key={index}  item={item} index={index} />
          );
        })}
      </div>

      <Button />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const all_products: Product[] = await getallProducts();
  
  const all_categories: Category[] = await getallCategories();  

  if (all_products) {
    return {
      props: {
        PRODUCTS: all_products,
        CATEGORIES: all_categories,
      },
    };
  }
};

export default Dashboard;
