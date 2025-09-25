// src/app/page.tsx
import HomePage from "./home/page";

export const dynamic = "force-static";
export const revalidate = 3600;

export default function Page() {
  return <HomePage />;
}
