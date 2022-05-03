import { CustomMeta, meta } from "components/meta";

type LayoutProps = {
  title?: string;
  desc?: string;
  children?: React.ReactNode;
};

const FormPageLayout = (props: LayoutProps) => {
  const title = props.title
    ? `Henrik VT Consulting: ${props.title}`
    : meta.title;
  const desc = props.desc ? props.desc : meta.desc;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gradient-to-tr from-brand-primary to-inherit">
      <CustomMeta title={title} desc={desc} />
      <div className="">{props.children}</div>
    </div>
  );
};

export default FormPageLayout;
