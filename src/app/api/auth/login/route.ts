export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return Response.json(
      { ok: false, role: "staff" },
      { status: 400 }
    );
  }

  return Response.json({ ok: true, role: "admin" });
}
