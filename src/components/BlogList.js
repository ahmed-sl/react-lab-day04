import React from "react";
import BlogItems from "./BlogItems";
import { Link } from "react-router-dom";

const BlogList = ({ blogList }) => {
  return (
    <ul className="list-group">
      {blogList.map((item, index) => {
        return (
          <div  key={index}>
            <Link to={`/blog/${item.id}`}>
              <BlogItems item={item.title} id={item.id} />
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default BlogList;
