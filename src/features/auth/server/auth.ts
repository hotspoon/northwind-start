// src/server/auth.ts
import { createServerFn } from "@tanstack/react-start";
import { setCookie } from "@tanstack/react-start/server";
import { z } from "zod";

// Skema input dan helper auth sederhana (demo)
const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

/**
 * Demo user lookup.
 * Ganti dengan query DB / service Anda.
 */
async function verifyUser(email: string, password: string) {
  // Contoh hard-coded demo
  if (email === "user@example.com" && password === "secret123") {
    return { userId: "u_123", name: "Demo User" };
  }
  return null;
}

export const loginFn = createServerFn({ method: "POST" }).handler(
  async (input: unknown) => {
    // Validasi payload
    const parsed = LoginSchema.safeParse(input);
    if (!parsed.success) {
      return { ok: false, error: "Invalid credentials payload" };
    }
    const { email, password } = parsed.data;

    const user = await verifyUser(email, password);
    if (!user) {
      return { ok: false, error: "Email atau password salah" };
    }

    // Buat token sesi (contoh sederhana; gunakan JWT/HMAC/DB session di produksi)
    const sessionToken = JSON.stringify({
      sub: user.userId,
      name: user.name,
      iat: Date.now(),
    });

    // Set cookie httpOnly untuk sesi
    setCookie("session", sessionToken, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      maxAge: 60 * 60 * 24 * 7, // 7 hari
    });

    return { ok: true };
  },
);
