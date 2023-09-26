export const isValidEmail = (email: string) => {
  return /^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(
    email
  );
};

export const isASCII = (value: string) => {
  return /^[\x00-\x7F]*$/.test(value);
};