import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../service";
import { Result } from "postcss";

const Comments = ({ slug }) => {
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setcomments(result);
    }, []);
  });
  return (
    <>
      {comments?.length > 0 && (
        <div className="shadow-lg justify-between rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b border-gray-600 pb-4">
            {comments?.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="p-4 bg-[#131415] flex flex-col rounded-xl mb-4"
            >
              <p className="mb-2 font-Secular text-lg">
                <span>{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-white w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
