import type { ReactNode } from "react";
import { metadataFor, RootShell } from "@/app/rootLayout";

export const metadata = metadataFor("vi");

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell lang="vi">{children}</RootShell>;
}
