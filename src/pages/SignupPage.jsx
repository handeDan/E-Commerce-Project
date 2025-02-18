import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    console.log(typeof data, data);
    const form = new FormData();
    form.append("name", data.name);
    form.append("email", data.email);
    form.append("password", data.password);
    form.append("role_id", data.role_id);

    try {
      if (data.role_id === "store") {
        data.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
        form.append("store", data.store);

        delete data.store_name;
        delete data.store_phone;
        delete data.store_tax_no;
        delete data.store_bank_account;
      }
      await api.post("/signup", form);
      alert("You need to click the link in email to activate your account!");
      navigate(-1);
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center py-7 bg-primary-dark">
      <div className="w-96 shadow-lg bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Join Us!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              className="w-full p-2 border rounded"
              placeholder="your first and last name"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                Must be at least 3 characters.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">E-mail</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="your e-mail"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="at least 6 characters"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                Must be at least cters and include uppercase/lowercase letters,
                numbers and special characters.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">
              Re-enter Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">Passwords do not match.</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Account Type</label>
            <select
              className="w-full p-2 border rounded"
              {...register("role_id", { required: true })}
              onChange={(e) => setValue("role_id", e.target.value)}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          {watch("role_id") === "store" && (
            <>
              <div>
                <label className="block text-sm font-medium">Store Title</label>
                <input
                  className="w-full p-2 border rounded"
                  {...register("store_name", { required: true, minLength: 3 })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Store Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded"
                  {...register("store_phone", {
                    required: true,
                    pattern: /^\+90\d{10}$/,
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Store Tax ID
                </label>
                <input
                  className="w-full p-2 border rounded"
                  {...register("store_tax_no", {
                    required: true,
                    pattern: /^T\d{4}V\d{6}$/,
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Store Bank Account (IBAN)
                </label>
                <input
                  className="w-full p-2 border rounded"
                  {...register("store_bank_account", {
                    required: true,
                    pattern: /^TR\d{24}$/,
                  })}
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
          <p className="text-primary text-xs">
            By creating an account, you agree to Bandage's Conditions of Use and
            Privacy Notice.
          </p>
          <div className="flex gap-5">
            <p>Already have an account?</p>
            <button
              className="text-secondary-blue underline"
              onClick={goToLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
