


import HeaderM from "~components/tui/headerM";

import type { NextPage } from "next";

const HomeLayout:NextPage = (props) => {
  return (
    <div>
      <HeaderM />
      {props.children}
    </div>
  )
};


export default HomeLayout;