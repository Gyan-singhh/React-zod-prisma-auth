import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/api";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      reset();
      alert("Login successful!");
      console.log("User:", data.user);
    },
    onError: (err: any) => {
      reset();
      alert(err.response?.data?.message || "Login failed");
    },
  });

  const onSubmit = (data: LoginSchema) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[320px] h-[314px] bg-white flex flex-col items-center gap-[48px] relative"
    >
      <h2 className="w-[320px] h-[38px] text-[#232323] text-center font-bold text-[30px] leading-[38px] tracking-[0]">
        Welcome back!
      </h2>

      <div className="w-[320px] h-[120px] flex flex-col gap-[24px]">
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-[320px] h-[48px] px-[14px] py-[12px] text-lg rounded-[8px] border-1 border-[#D6D6D6] outline-none shadow-[0px_1px_2px_0px_#1018280D]"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-[320px] h-[48px] px-[14px] py-[12px] text-lg rounded-[8px] border-1 border-[#D6D6D6] outline-none shadow-[0px_1px_2px_0px_#1018280D]"
        />
        {(errors.email?.message || errors.password?.message) && (
          <p className="text-sm text-red-500 ml-1">
            {errors.email?.message || errors.password?.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="absolute bottom-0 w-[320px] h-[60px] px-6 py-4 text-white text-lg font-semibold rounded-md border border-[#2B3A67] bg-[#2B3A67] hover:bg-[#1d294d] transition disabled:opacity-60 shadow-[0px_1px_2px_0px_#1018280D]"
      >
        <span>{mutation.isPending ? "Logging in..." : "Login"}</span>
      </button>
    </form>
  );
}
