import React from "react";
import FeaturedPost from "./FeaturedPost";
import { postList } from "../../../public/data";

function FeaturedPosts() {
  return (
    <div>
      <div className="text-center mx-auto w-1/2 mb-10 mt-20">
        <p className="mb-3 text-secondary-blue font-bold">Practice Advice</p>
        <p className="font-bold text-primary-dark text-4xl mb-2">
          Featured Products
        </p>
        <p className="text-primary">
          Problems trying to resolve the conflict between the two major
        </p>
      </div>
      <div className="mx-48 max-md:mx-5 flex flex-wrap gap-1 justify-around">
        {postList.map((item, key) => (
          <FeaturedPost key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedPosts;
