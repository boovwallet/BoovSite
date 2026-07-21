import { redirect } from "next/navigation";

// The alerts ledger is a chapter of the home story now.
export default function AlertsPage() {
  redirect("/#alerts");
}
