// Builds the workspace URL that carries the problem the visitor typed (contract: docs/PLAN.md, open decision 1).
export function appUrl(problem?: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "https://demo.dfriend.online";
  const q = problem?.trim();
  return q ? `${base}/?q=${encodeURIComponent(q)}` : `${base}/`;
}
