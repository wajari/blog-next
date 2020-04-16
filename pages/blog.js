import React from "react";
import PostListing from "../components/PostListing";

export const meta = {
  title: "Blog <dev> Wajari Velásquez",
  tags: ["Next.js", "MDX"],
  layout: "blog-post-list",
  publishDate: "2020-04-16",
  modifiedDate: false,
  seoDescription:
    "Listado de entradas del blog técnico de Wajari Velásquez. Construido con cariño en Next.JS, React y markdown"
};

export default function Blog(props) {
  const blogPosts = props.allData.filter(content => content.type == "post");
  return (
    <div className="blog-post-list">
      <h1>{meta.title}</h1>
      {blogPosts.map((post, index) => (
        <PostListing key={index} post={post} indes={index} />
      ))}
    </div>
  );
}
Blog.defaultProps = {
  allData: []
};
