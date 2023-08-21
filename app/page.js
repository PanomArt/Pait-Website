import About from "@/components/webpage-ui/about/About";
import Hero from "@/components/webpage-ui/hero/Hero";
import Portfolio from "@/components/webpage-ui/portfolio/Portfolio";
import Service from "@/components/webpage-ui/services/Service";
import Skills from "@/components/webpage-ui/skills/Skills";
import Head from "next/head";

export default function Home() {
  return (
     <div className='homepage-maindiv'>
          <Hero/>
          <About/>
          <Skills/>
          <Service/>
          <Portfolio/>
     </div>
  )
}
