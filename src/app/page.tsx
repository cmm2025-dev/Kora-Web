import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WhatIsKora from "@/components/sections/WhatIsKora";
import KoraFilosofia from "@/components/KoraFilosofia";
import Principle from "@/components/sections/Principle";
import KoraManifiesto from "@/components/KoraManifiesto";
import Architecture from "@/components/sections/Architecture";
import UseCases from "@/components/sections/UseCases";
import Solutions from "@/components/sections/Solutions";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhatIsKora />
        <KoraFilosofia />
        <Principle />
        <KoraManifiesto />
        <Architecture />
        <UseCases />
        <Solutions />
      </main>
      <Footer />
    </>
  );
}
