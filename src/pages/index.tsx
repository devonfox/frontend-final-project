import { Inter } from "next/font/google";
import TestPolygonEndpoint from "@/components/TestPolygonEndpoint";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <TestPolygonEndpoint />
      </main>
    </>
  );
}
