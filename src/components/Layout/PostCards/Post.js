import React from "react";

// import ButtonList from "./ButtonList";

import { Data } from "../../JsonFiles/PostCard.js";
import ButtonList from "./ButtonList.js";

const Post = () => {
  return (
    <>
      {Data &&
        Data.map((data, index) => {
          return (
            <div key={index}>
              <ButtonList data={data} />
            </div>
          );
        })}
    </>
  );
};

export default Post;
