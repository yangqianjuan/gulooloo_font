// src/app/page.tsx
import HomePage from "./home/page";

export const runtime = "edge";
export const dynamic = "force-static";

export default function Page() {
  return <HomePage />;
}
