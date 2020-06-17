import React from "react";
import SearchLayout from "../components/layouts/SearchLayout";
import PostListing from "../components/PostListing";
import { NextSeo } from "next-seo";

export const meta = {
  title: "Search post by topics | Wajari.dev",
  tags: ["react", "next", "JavaScript"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription:
    "Search post for web development topics in react, next and JavaScript. We will also talk about Linux, SEO and I will tell about my learning process",
};

export default function Search(props) {
  const renderListItems = (posts) => {
    const tagTopic = props.router.query.q;

    const items = posts
      .filter((post) => post.tags.includes(tagTopic))
      .map((post, index) => (
        <PostListing key={index} post={post} index={index} />
      ));

    if (items.length) {
      return items;
    } else {
      return <h2 key="not-found-headline">No results</h2>;
    }
  };
  const blogPosts = props.allData.filter((content) => content.type == "post");
  return (
    <div>
      <NextSeo
        title="Search post by topics | Wajari.Dev"
        description="Search post for web development topics in react, next and JavaScript. We will also talk about Linux, SEO and I will tell about my learning process"
      />
      <SearchLayout>
        <h1>
          Posts tagged: <span>{props.router.query.q}</span>
        </h1>
        {renderListItems(blogPosts)}
      </SearchLayout>
    </div>
  );
}
Search.defaultProps = {
  allData: [],
};
