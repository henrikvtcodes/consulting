import { useRouter } from "next/router";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { Fragment } from "react";
import fs from "fs";
import path from "path";

import HomeLayout from "layouts/home";
import { getPostBySlug } from "~utils/getPost";
import markdownToHtml from "~utils/markdownToHtml";
import markdownStyles from "../../styles/markdown.module.css";
import Post from "components/post";

type PageProps = {
  post: PostType;
  children?: React.ReactNode;
};

type PostType = {
  slug: string;
  title: string;
  client: string | null;
  coverImage: string;
  desc: string;
  content: string;
  published?: boolean;
};

// eslint-disable-next-line
const Page = ({ post }: { post: PostType }) => {
  const router = useRouter();

  return (
    <HomeLayout
      title={`${post.title}: An HVTC Customer Success Story`}
      desc={post.desc}
    >
      <div>
        <div className="max-w-2xl mx-auto pb-12">
          <span className="block text-base text-center text-brand-primary font-semibold tracking-wide uppercase my-4">
            Case Studies
          </span>
          <Post.Title>{post.title}</Post.Title>
          <Post.CoverImage image={post.coverImage} />
          {post.client ? (
            <h2 className="text-xl text-brand-text1">
              <span className="font-semibold ">For:</span>{" "}
              <span className="text-gray-700">{post.client}</span>
            </h2>
          ) : (
            <Fragment />
          )}
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </HomeLayout>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
    "client",
    "published",
    "desc",
  ]);
  const content = await markdownToHtml(post.content || "");

  if ((post.published as unknown as boolean) === false) {
    return {
      notFound: true,
    };
  }

  const finalPost: PostType = {
    title: post.title,
    slug: post.slug,
    client: post.client || null,
    coverImage: post.coverImage,
    desc: post.desc,
    content,
  };

  return {
    props: {
      post: finalPost,
    },
  };
}

export default Page;
