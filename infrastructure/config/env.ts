const requiredEnvVars = [
  "NEXT_PUBLIC_API_BASE_URL",
  "NEXT_PUBLIC_GOOGLE_LOGIN_PATH",
  "NEXT_PUBLIC_KAKAO_LOGIN_PATH",
] as const;

type EnvKey = (typeof requiredEnvVars)[number];

function loadEnv(): Record<EnvKey, string> {
  const missing: string[] = [];

  const entries = requiredEnvVars.map((key) => {
    const value = process.env[key];
    if (!value) {
      missing.push(key);
    }
    return [key, value ?? ""] as const;
  });

  if (missing.length > 0) {
    throw new Error(
      `필수 환경 변수가 설정되지 않았습니다: ${missing.join(", ")}`,
    );
  }

  return Object.fromEntries(entries) as Record<EnvKey, string>;
}

export const env = loadEnv();
