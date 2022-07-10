import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center relative mt-20 mb-8 py-12  bg-[#131415] rounded-md opacity-80">
      <div className="absolute -top-5 right-0 left-0">
        <Image
          alt={author.name}
          unoptimized
          height="50px"
          width="50px"
          className="rounded-full align-middle"
          src={author.photo.url}
        />
      </div>
      <div className="font-bold text-lg">{author.name}</div>
      <p>{author.bio}</p>
    </div>
  );
};

export default Author;
