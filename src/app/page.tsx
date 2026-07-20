import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WhatIsKora from "@/components/sections/WhatIsKora";
import Philosophy from "@/components/sections/Philosophy";
import Principle from "@/components/sections/Principle";
import Manifesto from "@/components/sections/Manifesto";
import Architecture from "@/components/sections/Architecture";
import UseCases from "@/components/sections/UseCases";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhatIsKora />
        <Philosophy />
        <Principle />
        <Manifesto />
        <Architecture />
        <UseCases />
      </main>
      <Footer />
    </>
  );
}
