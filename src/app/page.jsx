import { Cabecalho } from "@/components/hero/cabecalho";
import { NavBar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <Cabecalho />
    </main>
  );
}
