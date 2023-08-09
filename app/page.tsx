import Image from "next/image";
import { PageLayout } from "@/components/pageLayout";
import { EventInfos } from "@/components/eventInfos";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageLayout mainContent={<EventInfos></EventInfos>}></PageLayout>
    </main>
  );
}
