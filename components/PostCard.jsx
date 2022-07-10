import React from "react";
import moment from "moment";
import Link from "next/link";
import SvgComponent from "./svg";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className="bg-[#131415] shadow-lg rounded-lg lg:p-8 p-10 mb-6">
      {/* <div className="relative overflow-hidde shadow-md pb-80 mb-6">
        <img
          src={post.featuredimage.url}
          alt={post.title}
          className="absolute object-top h-80 w-full object-fill shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div> */}
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredimage.url}
          alt=""
          className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="text-[#ffffffff] transition duration-100 text-center mb-2 cursor-pointer hover:text-gray-300 text-xl font-Titan">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="text-center flex  items-center justify-between mb-2 ml-2 w-full">
        <div className="text-white font-semibold flex items-center space-x-2">
          <Image
            alt={post.author.name}
            unoptimized
            height="30px"
            width="30px"
            className="rounded-3xl align-middle"
            src={post.author.photo.url}
          />
          <p>{post.author.name}</p>
        </div>
        <div className="text-white font-semibold ">
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-white text-center ml-2">{post.excerpt}</p>
      <div className="mt-4 text-center justify-center items-center flex">
        <Link href={`/post/${post.slug}`}>
          <div className="shadow-[4px_4px_0px_0px_#094c66] font-Secular bg-[#1197cc] text-white rounded-sm transition duration-300 active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#094c66] px-3 py-2 my-2 cursor-pointer">
            Continue Reading
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
