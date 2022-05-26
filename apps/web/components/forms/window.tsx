type FormWindowProps = {
  children: React.ReactNode;
};

const FormWindow = (props: FormWindowProps) => {
  return (
    <div className="bg-white rounded-lg p-6 md:max-w-lg ">{props.children}</div>
  );
};

export default FormWindow;
