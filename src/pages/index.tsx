import TestRechartComponent from "@/components/Test/TestRechartComponent";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <TestRechartComponent />
      </main>
    </>
  );
}
