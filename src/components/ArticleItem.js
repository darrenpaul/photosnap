import React from "react";
import LinkButton from "./LinkButton";

const ArticleItem = ({ title, author, image, url }) => {
  return (
    <div
      className="flex flex-col items-start justify-end p-8 text-left duration-300 ease-out bg-cover text-pure-white h-128 hover:-translate-y-6 hover:shadow-[inset_0_-4px_1px_0_#BC15F4]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-col w-full gap-4 divide-y divide-divide-solid">
        <div className="">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-sm">by {author}</p>
        </div>
        <div className="pt-4 ">
          <LinkButton text="Read story" url={url} />
        </div>
      </div>
    </div>
  );
};
export default ArticleItem;
