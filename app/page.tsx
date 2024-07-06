import { HomePage } from "@/components/home/home";
import { AboutPage } from "@/components/about/about";
import { AboutFeatures } from "@/lib/info";
import { Expenses } from "@/components/expenses-demo/expenses";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 lg:p-24">
      <HomePage />
      <AboutPage data={AboutFeatures} />
      <Expenses />
    </main>
  );
}
