import { redirect } from "next/navigation";

export default function Page() {
  // Redirect root to /features as requested
  redirect("/features");
}
