import { useRouter } from "next/router";
import type { NextPage, GetStaticProps } from "next"
import fs from "fs";
import path from "path";

import HomeLayout from "layouts/home";
import { getPostBySlug } from "~utils/getPost";
import markdownToHtml from "~utils/markdownToHtml";
import markdownStyles from "../../styles/markdown.module.css";
import Post from "components/post";


type PageProps = { 
  post: PostType;
  children?: React.ReactNode,
}

type PostType = {
  slug: string;
  title: string;
  date: string;
  client: string;
  coverImage: string;
  excerpt: string;
  content: string;
  published?: boolean;
};

const Page = ({ post }:PageProps) => {
  const router = useRouter();

  return (
    <HomeLayout>
      <div>
        <div className="max-w-2xl mx-auto">
          <Post.Title>{post.title}</Post.Title>
          <Post.CoverImage image={post.coverImage}/>
          <h1 className="text-xl"><strong>For:</strong> {post.client}</h1>
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
  const files = fs.readdirSync(path.join('content'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }:any) {
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
    "client",
    "published",
  ]);
  const content = await markdownToHtml(post.content || "");

  if (post.published as unknown as boolean === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}


export default Page;