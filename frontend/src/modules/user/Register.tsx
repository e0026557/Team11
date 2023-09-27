import React from "react";
import {
  SubmitErrorHandler,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormResetField,
  UseFormSetValue,
  UseFormWatch,
  useForm,
} from "react-hook-form";
import { toast } from "react-toastify";
import {
  asciiErrorMsg,
  invalidEmailErrorMsg,
  maxLengthErrorMsg,
  passwordNotMatchedErrorMsg,
  reEnterPasswordErrorMsg,
  requiredInputErrorMsg,
} from "../../shared/util/error-message.util";
import { isASCII, isValidEmail } from "../../shared/util/validation";

type RegisterInputs = {
  name: string;
  role: number | null;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  // react-hook-form
  const form: {
    handleSubmit: UseFormHandleSubmit<RegisterInputs>;
    register: UseFormRegister<RegisterInputs>;
    resetField: UseFormResetField<RegisterInputs>;
    getValues: UseFormGetValues<RegisterInputs>;
    setValue: UseFormSetValue<RegisterInputs>;
    watch: UseFormWatch<RegisterInputs>;
    formState: {
      errors: any;
      touchedFields: any;
      isSubmitting: boolean;
      isSubmitted: boolean;
      isValid: boolean;
    };
  } = useForm<RegisterInputs>({
    mode: "all",
  });

  // Watched fields
  const watchPassword = form.watch("password");

  const ROLES = [
    {
      roleId: 1,
      roleDescription: 'Campsite Permit Applicant'
    },
    {
      roleId: 2,
      roleDescription: 'Campsite Admin'
    },
  ];

  const renderRoleOptions = () => {
    return ROLES.map((role, idx) => {
      return (
        <option value={role.roleId} key={role.roleId}>
          {role.roleDescription}
        </option>
      )
    });
  };

  const submitForm: SubmitHandler<RegisterInputs> = async (data) => {
    console.log("submitForm: ", data);
    // TODO: Axios call to register API endpoint
  };

  const onError: SubmitErrorHandler<RegisterInputs> = (errors) => {
    console.log("onError: ", errors);
    toast.error("Please check required fields.", {
      toastId: "register-error",
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
            Register an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(submitForm, onError)}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  {...form.register("name", {
                    required: {
                      value: true,
                      message: requiredInputErrorMsg("name"),
                    },
                    maxLength: {
                      value: 100,
                      message: maxLengthErrorMsg("name", 100),
                    },
                    validate: {
                      isAscii: (value) =>
                        !isASCII(value) && asciiErrorMsg("name"),
                    },
                  })}
                  type="text"
                  maxLength={100}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {form.formState.errors?.name ? (
                  <label className="text-red-400">
                    {form.formState.errors.name.message}
                  </label>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <select
                  {...form.register("role", {
                    required: {
                      value: true,
                      message: requiredInputErrorMsg("role"),
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value=''>Please select role</option>
                  {renderRoleOptions()}
                </select>
                {form.formState.errors?.role ? (
                  <label className="text-red-400">
                    {form.formState.errors.role.message}
                  </label>
                ) : null}
              </div>
            </div>

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
                      message: maxLengthErrorMsg("email", 320),
                    },
                    validate: {
                      isValidEmail: (value) =>
                        !isValidEmail(value) && invalidEmailErrorMsg(),
                    },
                  })}
                  type="text"
                  maxLength={320}
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
                      message: maxLengthErrorMsg("password", 50),
                    },
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Re-enter password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...form.register("confirmPassword", {
                    required: {
                      value: watchPassword?.length > 0,
                      message: reEnterPasswordErrorMsg(),
                    },
                    maxLength: {
                      value: 50,
                      message: maxLengthErrorMsg("password", 50),
                    },
                    validate: {
                      isPasswordMatched: (value) => {
                        if (value && watchPassword) {
                          return (
                            value !== watchPassword &&
                            passwordNotMatchedErrorMsg()
                          );
                        }
                      },
                    },
                  })}
                  type="password"
                  maxLength={50}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {form.formState.errors?.confirmPassword ? (
                  <label className="text-red-400">
                    {form.formState.errors.confirmPassword.message}
                  </label>
                ) : null}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account already?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
