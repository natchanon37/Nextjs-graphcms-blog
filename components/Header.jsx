import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../service";

const Header = () => {
  const [categories, setcategorie] = useState([]);
  useEffect(() => {
    getCategories().then((newcategories) => setcategorie(newcategories));
  }, []);
  return (
    <div className="mx-auto px-auto mb-6 container">
      <div className="w-full p-4 inline-block">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer text-[#ffffffff]  font-bold text-2xl font-Titan">
              AlohaBlog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 align-middle text-[#ffffffff]  ml-4 font-Titan cursor-pointer md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
