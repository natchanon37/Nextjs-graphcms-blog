import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPost, getSimilarPosts } from "../service";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setrelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setrelatedPosts(result)
      );
    } else {
      getRecentPost().then((result) => setrelatedPosts(result));
    }
  }, [slug]);
  console.log(relatedPosts);
  return (
    <div className="p-3 text-white rounded-xl mb-8">
      <h3 className="text-xl mb-4 font-Titan text-center">
        {slug ? "Related Post" : "Recent Post"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div className="flex items-center w-full" key={index}>
          <div className="flex-col mb-4 text-sm flex-grow p-2 border-b border-gray-800 cursor-pointer hover:-translate-y-1 duration-300">
            <p className="text-sm text-gray-500">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={index}
              className="text-white"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
