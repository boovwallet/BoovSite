import { redirect } from "next/navigation";

// The activity feed is a chapter of the home story, not a standalone entry.
export default function AlertsPage() {
  redirect("/");
}
