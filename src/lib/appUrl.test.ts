import { afterEach, expect, it, vi } from "vitest";
import { appUrl } from "./appUrl";

afterEach(() => vi.unstubAllEnvs());

it("builds the workspace URL: bare when empty, encoded ?q= otherwise", () => {
  vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://app.test");
  expect(appUrl()).toBe("https://app.test/");
  expect(appUrl("   ")).toBe("https://app.test/");
  const problem = "Vì sao con lắc kép & ném xiên đi xa? ";
  expect(appUrl(problem)).toBe(`https://app.test/?q=${encodeURIComponent(problem.trim())}`);
  expect(new URL(appUrl(problem)).searchParams.get("q")).toBe(problem.trim());
});

it("falls back to the production app host when NEXT_PUBLIC_APP_URL is unset", () => {
  delete process.env.NEXT_PUBLIC_APP_URL;
  expect(appUrl("x")).toBe("https://demo.dfriend.online/?q=x");
});
