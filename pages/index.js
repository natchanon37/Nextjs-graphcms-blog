import Head from "next/head";
import React from "react";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../service";
import FeaturedPosts from "../sections/FeaturedPosts";
export default function HomePage({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog-App</title>
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
