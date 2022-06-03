import NextLink from "next/link";
import { useRouter } from "next/router";

const PostTag = ({ tagName }: { tagName: string }) => {
  const router = useRouter();

  let color: string = "bg-gray-200";
  const tag = tagName.toLowerCase();
  if (tag === "wifi") {
    color = "bg-red-200";
  } else if (tag === "networking") {
    color = "bg-orange-200";
  } else if (tag === "security") {
    color = "bg-blue-200";
  } else if (tag === "cloud") {
    color = "bg-green-200";
  }

  return (
    <NextLink href={`${router.asPath}?category=${tag}`} passHref>
      <a>
        <span
          className={`${color} inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2`}
        >
          {tagName}
        </span>
      </a>
    </NextLink>
  );
};

const PostTagDead = ({ tagName }: { tagName: string }) => {
  const router = useRouter();

  let color: string = "bg-gray-200";
  const tag = tagName.toLowerCase();
  if (tag === "wifi") {
    color = "bg-red-200";
  } else if (tag === "networking") {
    color = "bg-orange-200";
  } else if (tag === "security") {
    color = "bg-blue-200";
  } else if (tag === "cloud") {
    color = "bg-green-200";
  }

  return (
    <span
      className={`${color} inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2 mt-1`}
    >
      {tagName}
    </span>
  );
};

export { PostTag, PostTagDead };
