"use client"
import './Footer.css'
import { useScroll, useTransform , motion} from "framer-motion"
import {useRef, useEffect} from "react"


export default function Footer() {
    
    const container = useRef();
    const texts = useRef([]);
    const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
    })

    const y = useTransform(scrollYProgress, [0,1], [-700, 0]);
    // useEffect(() => {
    //     scrollYProgress.on('change', e => {
    //         texts.current.forEach((text, i) => {
    //             text.setAttribute('startOffset', -22 + (i * 22) + (e * 22) + "%");
    //         })
    //     })
    // }, []);
    useEffect(() => {
  const unsubscribe = scrollYProgress.on("change", (e) => {
    texts.current.forEach((text, i) => {
      if (!text) return
      const base = i * 30
      const move = e * -30
      text.setAttribute("startOffset", `${base + move}%`)
    })
  })

  return () => unsubscribe()
}, [])

    return (
        <>
        <div className="footer" ref={container}>
            <svg viewBox="0 0 1000 200"
                preserveAspectRatio="none"
                width="100%"
                height="100%"
            >
                <path d="M 0 120
                        C 200 40, 400 40, 600 120
                        S 900 200, 1000 120"
                    fill="none"
                    id="curve"
                />
                
                <text className="curved-text">
                    {Array.from({ length: 5 }).map((_, i) => (<textPath ref={ref => texts.current[i] = ref} href="#curve" key={i} startOffset={i * 22 + "%"}> Hello les coupains</textPath>))}
                </text>
            </svg>
            </div>
        
</>
    )
}