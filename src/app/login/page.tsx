import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-10">
      <div>
        <h1 className="text-3xl font-semibold text-neutral-900">
          운영 콘솔 로그인
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          관리자 계정으로 대시보드에 접속하세요.
        </p>
      </div>
      <LoginForm />
    </main>
  );
}
