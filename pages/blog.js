import React from "react";
import PostListing from "../components/PostListing";
import { NextSeo } from "next-seo";

export const meta = {
  title: "Blog <dev> Wajari Velásquez",
  tags: ["Next.js", "MDX"],
  layout: "blog-post-list",
  publishDate: "2020-04-16",
  modifiedDate: false,
  seoDescription:
    "Listado de entradas del blog técnico de Wajari Velásquez. Construido con cariño en Next.JS, React y markdown",
};

export default function Blog(props) {
  const blogPosts = props.allData.filter((content) => content.type == "post");
  return (
    <div className="blog-post-list">
      <NextSeo
        title="Blog | Wajari.Dev"
        description="List of technical blog entries of Wajari Velásquez. Lovingly built in Next.JS, React and markdown"
        canonical="https://wajari.dev/blog"
      />
      <h1>{meta.title}</h1>
      {blogPosts.map((post, index) => (
        <PostListing key={index} post={post} indes={index} />
      ))}
    </div>
  );
}
Blog.defaultProps = {
  allData: [],
};
