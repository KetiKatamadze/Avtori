import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./AuthForm.css";
import googleIcon from "../assets/google-icon.png";

const createSchema = (type) => {
  if (type === "login") {
    return z.object({
      email: z.string().email("Enter a valid email"),
      password: z.string().min(1, "Password cannot be empty"),
    });
  } else if (type === "register") {
    return z
      .object({
        email: z.string().email("Enter a valid email"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string(),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
  }
};

export default function AuthForm({ type = "login", onSubmit }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const schema = createSchema(type);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const submitHandler = async (data) => {
    setIsSubmitting(true);
    setSuccessMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(
        type === "login"
          ? "Login successful ✅"
          : "Account created successfully ✅"
      );
      reset();
      if (onSubmit) onSubmit(data);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    setSuccessMessage("");

    setTimeout(() => {
      setGoogleLoading(false);
      setSuccessMessage("Logged in with Google ✅");
    }, 1000);
  };

  const fields = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
    ...(type === "register"
      ? [
          {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
          },
        ]
      : []),
  ];

  return (
    <section className="auth-section">
      <div className="auth-container">
        <h2>{type === "login" ? "Login" : "Create Account"}</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
          {fields.map((field) => (
            <div className="form-group" key={field.name}>
              <label>{field.label}</label>
              <input
                type={field.type}
                {...register(field.name)}
                placeholder={field.label}
              />
              {errors[field.name] && (
                <p className="error">{errors[field.name]?.message}</p>
              )}
            </div>
          ))}

          <button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting
              ? type === "login"
                ? "Logging in..."
                : "Registering..."
              : type === "login"
              ? "Login"
              : "Register"}
          </button>

          {/* Google button only for login */}
          {type === "login" && (
            <button
              type="button"
              className="google-btn"
              onClick={handleGoogleLogin}
              disabled={googleLoading}
            >
              <img src={googleIcon} alt="google-icon" className="google-icon" />
              {googleLoading ? "Signing in..." : "Continue with Google"}
            </button>
          )}
        </form>

        {successMessage && <p className="success">{successMessage}</p>}
      </div>
    </section>
  );
}
