// TODO: Rewrite signup to use next-auth

type CreateAccountProps = {
  email: string;
  password: {
    enter: string;
    confirm: string;
  };
  phone: string;
  redirectTo?: string;
  rememberMe?: boolean;
};

const createAccount = ({
  email,
  password,
  phone,
  redirectTo,
}: CreateAccountProps) => {
  let passwordsMatch = password.enter === password.confirm;
};

const onCreateAccountSubmit = async (formData: CreateAccountProps) => {};

export { createAccount, onCreateAccountSubmit };
