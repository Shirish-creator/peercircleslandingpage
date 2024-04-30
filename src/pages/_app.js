import "@/styles/globals.css";
import "@/styles/variables.scss"
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useEffect } from "react";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
  useLayoutEffect(()=>{
    const lenis = new Lenis()
  
  lenis.on('scroll', (e) => {
  })
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 500)
  })
  
  gsap.ticker.lagSmoothing(0)
  })
  return <Component {...pageProps} />;
}
