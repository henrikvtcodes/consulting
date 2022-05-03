import HomeLayout from "layouts/home";
import ProjectList from "apps/web/components/tui/projectList";
import { ProjectProps } from "apps/web/components/tui/projectList";
import { getAllPosts } from "apps/web/utils/getPost";

type Props = {
  allPosts: ProjectProps[];
};

const Page = ({ allPosts }: Props) => {
  return (
    <HomeLayout>
      <ProjectList projects={allPosts} />
    </HomeLayout>
  );
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
