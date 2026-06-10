import Hero from "../components/Hero";
import Section_funcionalidades from "../components/Section_funcionalidades";
import Vantagens from "../components/Vantagens";
import Como_Funciona from "../components/Como_Funciona";
import Perguntas from "../components/Perguntas";
import Fale from "../components/Fale";
import Mascote from "../components/Mascote";

function Home() {
  return (
    <main>
      <Hero />
      <Section_funcionalidades />
      <Vantagens />
      <Como_Funciona />
      <Mascote />
      <Perguntas />
      <Fale />
    </main>
  );
}

export default Home;
