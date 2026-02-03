
import Header from "@/components/Header/Header";
import Summary from "@/components/Summary/Summary";
import './globals.css'
export default function Home() {
  return (
    <>
      <Header/>
      <div className="core-container">
        <Summary/>
        <h1 className="title">Votre site restaurant en 48h 🚀</h1>
            <p className="subtitle">Menu QR code, design moderne, livraison express.</p>
            <button className="cta-button">Commander mon site →</button>
      </div>
    </>
  );
}
