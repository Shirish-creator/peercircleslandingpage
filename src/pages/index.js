import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from "react";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const tl=gsap.timeline();
  const cityref=useRef()
const characterref=useRef()


useLayoutEffect(()=>{
  tl
  .to(cityref.current.style,{
    transform: "translateX(-300px)",
  ease: "power1.in",
  scrollTrigger:{
    trigger:'.feature2',
    start:"top bottom",
    end:" top top",
    scrub:true,
    immediateRender:false,
    

  }
  },[])
  .to(cityref.current.style,{
    // transform: "scale(3) translateX(-200px)",

    transform: "translateX(-600px)",
  ease: "power1.in",
  scrollTrigger:{
    trigger:'.feature3',
    start:"top bottom",
    end:" top top",
    scrub:true,
    immediateRender:false,
    
    

  }
  },[])
  .to(characterref.current.style,{
    transform: "translateX(-33.33%)",
  ease: "power1.in",
  scrollTrigger:{
    trigger:'.feature2',
    start:"top bottom",
    end:" top top",
    scrub:true,
    immediateRender:false,
    

  }
  },[])
  .to(characterref.current.style,{
    // transform: "scale(3) translateX(-340px)",

    transform: " translateX(-66.66%)",
  ease: "power1.in",
  scrollTrigger:{
    trigger:'.feature3',
    start:"top bottom",
    end:" top top",
    scrub:true,
    immediateRender:false,
    
    

  }
  },[])
  
},[])


  return (
    <>
    <Head>
    <title>Landing Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&family=Archivo:ital,wght@0,100..900;1,100..900&family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Spicy+Rice&family=Unbounded:wght@200..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&family=Archivo:ital,wght@0,100..900;1,100..900&family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Spicy+Rice&family=Unbounded:wght@200..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

</link>
    
    </Head>
    <section style={{height:'125vh'}} className=" hero relative w-full flex flex-col items-center gap-32 ">
      <header  className="h-fit z-50 flex flex-row w-full items-center justify-center fixed top-0">
        <div className="flex flex-row px-4 py-2 h-fit w-4/5 items-center justify-between">
          <img src="/logo.png">
          </img>
          <button className="h-fit py-2 px-10 rounded-full border-2 border-black bg-lime-400 text-black work-sans-btn">Register Now</button>

        </div>
      </header>
      <div className="flex container flex-col items-center justify-center text-center gap-8" style={{width:"50%"}}>
        <h1 className="spicy-rice-regular text-8xl mt-32  " style={{lineHeight:'80px'}}>WHERE THE REAL YOU BELONGS.</h1>
        <p className="text-xl w-4/5 work-sans text-zinc-400">Safe spaces centred around your identity - express yourself, find acceptance & truly belong. Beauty, vibes & all.</p>
        <button className="h-fit py-2 px-10 rounded-full border-2 border-black bg-lime-400 text-black work-sans-btn">Get Early Access</button>

      </div>
      <img style={{position:'absolute',bottom:'3px',left:"0px",width:'3000px', transform:"scale(1.3) translateY(-11%) translateX(32px)"}} src="/heroilllustration.png" ></img>
    </section>
    <div className=" relative flex-row ">
      <div style={{height:'100%',zIndex:0}} className="absolute top-0 w-1/2 ">
      <div className="sticky  top-0  h-screen relative flex flex-col justify-center items-start overflow-hidden ">
      <div style={{width:'300%',position:'absolute',bottom:"15%"}}>
        <img
          ref={cityref}
          src="/cityscape.png"
          alt="Cityscape"
          style={{transform:'translateX(0px)'}}

          />   
        </div>
        <div style={{width:'300%',position:'absolute',bottom:0}}>

        <img

          ref={characterref}
          src="/longcharacter.png"
          // style={{transform:"scale(3)",position:'absolute',left:'760px',bottom:'10%'}}

          style={{transform:'translateX(0px)'}}
          alt="Cityscape"
          />      
          </div>  
      </div>
      </div>
      <section className="h-screen feature1 flex flex-col items-end">
      <div className="w-1/2 bg-lime-200 h-full relative py-24 px-24 flex flex-col overflow-hidden gap-12">
        <div className="flex flex-col w-full gap-8">
      <h1 className="spicy-rice-regular text-5xl  text-black  ">BUILD A DIGITAL WORLD YOUR WAY</h1>
      <p className="text-xl w-full work-sans text-zinc-800">Safe spaces centred around your identity - express yourself, find acceptance & truly belong. Beauty, vibes & all.</p>
      <img src="/card1.png" style={{transform:"scale(1.4)"}}></img>
      </div>
      </div>
      </section>
      <section className="h-screen feature2 flex flex-col items-end">
      <div className="w-1/2 bg-pink-200 h-full py-24 px-24 flex flex-col relative gap-12">

        <div className="flex flex-col w-full gap-8">
      <h1 className="spicy-rice-regular text-5xl  text-black  ">NO FAKES, REAL PROFILES START HERE</h1>
      <p className="text-xl w-full work-sans text-zinc-800">Safe spaces centred around your identity - express yourself, find acceptance & truly belong. Beauty, vibes & all.</p>

      </div>
      </div>
      </section>      
      <section className="h-screen feature3 flex flex-col items-end">
      <div className="w-1/2 bg-white relative h-full py-24 px-24 flex flex-col gap-12">

        <div className="flex flex-col z-10 w-full gap-8">
      <h1 className="spicy-rice-regular text-5xl  text-black  ">CHATS THAT GO BEYOND, "HEY!"</h1>
      <p className="text-xl w-full work-sans text-zinc-800">Safe spaces centred around your identity - express yourself, find acceptance & truly belong. Beauty, vibes & all.</p>
      <img src="/card3.png" style={{width:'100%'}}></img>

      </div>
      </div>
      </section>
    </div>
    <section className="h-screen bg-Alias-Primary-500">
      <div className="container px-16">hello</div>
    </section>


    </>
  );
}
