import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../service";

const CommentForm = ({ slug }) => {
  const [error, seterror] = useState(false);
  const [showMessageOk, setshowMessageOk] = useState(false);
  //use useRef to read the input and send to graphCMS
  const commentEl = useRef();
  const nameEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
  });

  const handleCommentSubmit = () => {
    seterror(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    if (!comment || !name) {
      seterror(true);
      return;
    }
    const commentObj = { name, comment, slug };

    submitComment(commentObj).then((res) => {
      setshowMessageOk(true);

      setTimeout(() => {
        setshowMessageOk(false);
      }, 3000);
    });
  };

  return (
    <div className="p-8 pb-12">
      <h1 className="text-xl mb-8 pb-2 border-gray-800 border-b font-Titan">
        Comment
      </h1>
      <div className=" grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 bg-[#131415] text-gray-300"
          placeholder="Comment"
          name="commnet"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 bg-[#131415] text-gray-300"
          placeholder="Name"
        />
      </div>
      {error && (
        <p className="text-xs text-red-600 font-semibold">
          All field are requried
        </p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmit}
          className="shadow-[4px_4px_0px_0px_#5c27a6] font-Secular bg-indigo-500 rounded-sm transition duration-300 active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#5c27a6] px-8 py-3"
        >
          Post Comment
        </button>
        {showMessageOk && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            {" "}
            Comment submitted !
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
