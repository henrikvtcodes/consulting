import HomeLayout from "layouts/PublicPage";
import ProjectList from "~components/marketing/CaseStudyList";
import { ProjectProps } from "~components/marketing/CaseStudyList";
import { getAllPosts } from "utils/getPost";

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
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};

export default Page;
