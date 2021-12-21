

import HomeLayout from "layouts/home";
import ProjectList from "~components/tui/projectList";
import { ProjectProps } from "~components/tui/projectList";
import { getAllPosts } from "~utils/getPost";

type Props = {
  allPosts: ProjectProps[];
};

const Page = ({ allPosts }: Props) => {
  return (
    <HomeLayout>
      <ProjectList projects={allPosts} />
    </HomeLayout>
  )
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "slug",
    "client",
    "desc",
    "published",
  ]);

  return {
    props: { allPosts },
  };
};

export default Page;