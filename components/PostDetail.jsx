import React from "react";
import moment from "moment";
import Image from "next/image";
const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className="bg-[#131415] shadow-lg rounded-lg p-8 lg:pb-1 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6 lg:mb-8">
        <img
          src={post.featuredimage.url}
          alt={post.title}
          className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="text-[#ffffffff] text-center mb-2 text-xl font-Titan">
        {post.title}
      </h1>
      <div className="lg:px-0 px-2">
        <div className="flex items-center justify-between mb-4 w-full border-b pb-3 border-gray-600">
          <div className="flex items-center space-x-2 lg:w-auto mr-8">
            <Image
              alt={post.author.name}
              unoptimized
              height="30px"
              width="30px"
              className="rounded-3xl align-middle"
              src={post.author.photo.url}
            />
            <p className="inline align-middle font-semibold">
              {post.author.name}
            </p>
          </div>
          <div className="inline align-middle font-semibold">
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        <div className="indent-3 text-justify">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
