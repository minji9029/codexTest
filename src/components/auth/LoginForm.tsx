"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/lib/schemas/auth";

export default function LoginForm() {
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    setMessage(null);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setMessage("로그인되었습니다. 대시보드로 이동합니다...");
    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      <div>
        <label className="text-sm text-neutral-600">이메일</label>
        <input
          type="email"
          placeholder="you@company.com"
          className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-2 text-xs text-rose-600">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="text-sm text-neutral-600">비밀번호</label>
        <input
          type="password"
          placeholder="••••••••"
          className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400"
          {...register("password")}
        />
        {errors.password && (
          <p className="mt-2 text-xs text-rose-600">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" />
          로그인 유지
        </label>
        <button type="button" className="text-neutral-600 hover:underline">
          비밀번호를 잊으셨나요?
        </button>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white disabled:opacity-60"
      >
        {isSubmitting ? "로그인 중..." : "로그인"}
      </button>
      {message && (
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-600">
          {message}
        </div>
      )}
    </form>
  );
}
