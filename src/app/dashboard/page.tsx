import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import Container from "@/components/Container";

export default async  function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/api/auth/signin");

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
};