import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../service";
const Categories = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setcategories(newCategories));
  }, []);
  return (
    <div className="p-3 text-white rounded-xl mb-8">
      <h3 className="text-xl mb-4 font-Titan text-center">Categories</h3>
      {categories.map((category) => (
        <div className="flex-col mb-4 text-sm flex-grow p-2 border-b border-gray-800 cursor-pointer hover:-translate-y-1 duration-300">
          <Link
            key={category.createdAt}
            href={`/category/${category.slug}`}
            className="text-white"
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
