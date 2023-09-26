export const requiredInputErrorMsg = (label: string) => {
  return `Please enter ${label}.`;
};

export const passwordNotMatchedErrorMsg = () => "Password does not match.";

export const reEnterPasswordErrorMsg = () => "Please re-enter password";

export const invalidEmailErrorMsg = () => 'Please enter a valid email address';

export const maxLengthErrorMsg = (label: string, maxLength: number) => {
  return `${label} cannot be longer than ${maxLength} characters.`;
};

export const asciiErrorMsg = (label: string) => {
  return `Please input in English characters only for ${label}.`;
};