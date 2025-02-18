import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/thunkActions.js";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data));
      navigate(location.state?.from || "/", { replace: true });
    } catch (error) {
      setError("email", { type: "manual", message: error.message });
    }
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
                pattern: {
                  value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="at least 8 characters"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="mr-2"
            />
            <label>Remember Me</label>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>

          <div className="flex gap-5">
            <p>Don't have an account? </p>
            <button
              type="button"
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
