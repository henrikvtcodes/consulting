import type { NextPage } from "next";

import HeaderM from "apps/web/components/tui/headerM";
import { CustomMeta, meta } from "apps/web/components/meta";

type HomeLayoutProps = {
  title?: string;
  desc?: string;
  image?: string;
  children?: React.ReactNode;
};

const HomeLayout = (props: HomeLayoutProps) => {
  const title = props.title
    ? `Henrik VT Consulting: ${props.title}`
    : meta.title;
  const desc = props.desc ? props.desc : meta.desc;
  const image = props.image ? props.image : meta.image;

  return (
    <div>
      <CustomMeta title={title} desc={desc} image={image} />
      <HeaderM />
      {props.children}
    </div>
  );
};

export default HomeLayout;
