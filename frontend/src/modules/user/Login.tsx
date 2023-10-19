import React from "react";
import {
  SubmitErrorHandler,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormResetField,
  UseFormSetValue,
  useForm,
} from "react-hook-form";
import { toast } from "react-toastify";
import { invalidEmailErrorMsg, maxLengthErrorMsg, requiredInputErrorMsg } from "../../shared/util/error-message.util";
import { isValidEmail } from "../../shared/util/validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type LoginInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  // react-hook-form
  const form: {
    handleSubmit: UseFormHandleSubmit<LoginInputs>;
    register: UseFormRegister<LoginInputs>;
    resetField: UseFormResetField<LoginInputs>;
    getValues: UseFormGetValues<LoginInputs>;
    setValue: UseFormSetValue<LoginInputs>;
    formState: {
      errors: any;
      touchedFields: any;
      isSubmitting: boolean;
      isSubmitted: boolean;
      isValid: boolean;
    };
  } = useForm<LoginInputs>({
    mode: "all",
  });

  const submitForm: SubmitHandler<LoginInputs> = async (data) => {
    console.log("submitForm: ", data);
    try {
      const loginResponse = await axios.post("https://rvdq38ozu8.execute-api.ap-southeast-1.amazonaws.com/dev/api/user/Login", data);

        console.log('loginResponse: ', loginResponse);

        if(loginResponse.status === 200) {
          sessionStorage.setItem("userId", loginResponse?.data?.userId);
          navigate('/dashboard');
        }
    } catch (error) {
    console.log('error: ', error);
    toast.error(
      "An error occurred while logging in. Please try again.",
      {
        toastId: "login-error",
      }
    );
  }
};

const onError: SubmitErrorHandler<LoginInputs> = (errors) => {
  console.log("onError: ", errors);
  toast.error("Incorrect email and/or password.", {
    toastId: "login-error",
  });
};

return (
  <>
    <div className="flex min-h-fit flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={form.handleSubmit(submitForm, onError)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                {...form.register("email", {
                  required: {
                    value: true,
                    message: requiredInputErrorMsg("email"),
                  },
                  maxLength: {
                    value: 320,
                    message: maxLengthErrorMsg('email', 320),
                  },
                  validate: {
                    isValidEmail: (value) =>
                      isValidEmail(value) || invalidEmailErrorMsg(),
                  },
                })}
                type="email"
                maxLength={320}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {form.formState.errors?.email ? (
                <label className="text-red-400">
                  {form.formState.errors.email.message}
                </label>
              ) : null}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="/forgot-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                {...form.register("password", {
                  required: {
                    value: true,
                    message: requiredInputErrorMsg("password"),
                  },
                  maxLength: {
                    value: 50,
                    message: maxLengthErrorMsg('password', 50),
                  }
                })}
                type="password"
                maxLength={50}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {form.formState.errors?.password ? (
                <label className="text-red-400">
                  {form.formState.errors.password.message}
                </label>
              ) : null}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account yet?{" "}
          <a
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  </>
);
};

export default Login;
