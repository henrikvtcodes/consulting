


type FormWindowProps = {
  children: React.ReactNode;
}

const FormWindow = (props:FormWindowProps) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        {props.children}
      </div>
    </div>
  );
}

export default FormWindow;