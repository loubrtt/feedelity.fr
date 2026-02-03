'use client'

import Header from "@/components/Header/Header";
import Summary from "@/components/Summary/Summary";
import Partners from "@/components/Partners/Partners"
import Footer from "@/components/Footer/Footer";
import './globals.css'
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import LegalMentions from "@/components/LegalMentions/LegalMentions";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time : number){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Header/>
      <div className="core-container">
        <Summary/>
        <h1 className="title">Votre site restaurant en 48h 🚀</h1>
            <p className="subtitle">Menu QR code, design moderne, livraison express.</p>
            <button className="cta-button">Commander mon site →</button>
        <Partners/>
       
      </div>
       <Footer/>
       <LegalMentions/>
    </>
  );
}
