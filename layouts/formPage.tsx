

interface LayoutProps {
  children: React.ReactNode
}

const FormPageLayout = ({children}:LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-tr from-brand-primary to-inherit">
      <div className="">{children}</div>
    </div>
  );
}

export default FormPageLayout;