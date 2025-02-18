import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await dispatch(loginUser(data));
    navigate(-1 || "/");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex justify-center items-center py-7 bg-primary-dark">
      <div className="w-96 shadow-lg bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-center mb-4">
          Already have an account?
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">E-mail</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="your e-mail"
              {...register("email", {
                required: "Email is required",
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="at least 8 characters"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>

          <label>
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="mt-5"
            />{" "}
            Remember Me
          </label>

          <div className="flex gap-5">
            <p>Don't have an account? </p>
            <button
              type="submit"
              onClick={goToSignup}
              className="text-secondary-blue underline"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
