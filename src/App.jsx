import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function DataImage() {
  const texture = useLoader(TextureLoader, "/heatmap.png"); // Image from public folder
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[3, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default function App() {
  const canvasRef = useRef(null);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #a855f7, #ec4899, #facc15)", color: "white", padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem", textShadow: "2px 2px #000" }}>
        Alen Kurian — Data Analyst Portfolio
      </h1>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "4rem" }}>
        <div style={{ background: "white", color: "#1f2937", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4f46e5", marginBottom: "1rem" }}>About Me</h2>
          <p>
            Hi, I’m Alen — a data analyst with expertise in Python, SQL, Tableau, and automation. I help businesses turn messy data into clear decisions.
          </p>
        </div>

        <div style={{ background: "white", color: "#1f2937", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4f46e5", marginBottom: "1rem" }}>Services</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
            <li>Interactive Dashboards (Tableau, Power BI)</li>
            <li>Data Cleaning & Automation (Python, Excel)</li>
            <li>Business Reports & Insights</li>
            <li>Survey / Feedback Analysis</li>
          </ul>
        </div>
      </section>

      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center" }}>Projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "4rem" }}>
        {[
          {
            title: "Credit Card Fraud Detection",
            tech: "Python, Django, Random Forest",
            desc: "Real-time fraud alerts with secure admin control and ML model integration.",
          },
          {
            title: "GenreSense — Music Genre Classification",
            tech: "Python, CNN, Streamlit",
            desc: "Deep learning-based genre prediction using GTZAN dataset with clean UI.",
          },
          {
            title: "Telemetry Dashboard (Tableau)",
            tech: "Tableau, JSON, Calculated Fields",
            desc: "Interactive dashboard to analyze system health and sensor anomalies.",
          },
          {
            title: "Instagram Analytics Breakdown",
            tech: "Python, Pandas, Matplotlib",
            desc: "Simulated analysis of Reels performance — timing, hashtags, reach.",
          },
        ].map((project, i) => (
          <div key={i} style={{ background: "white", color: "#1f2937", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#db2777" }}>{project.title}</h3>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: "0.25rem 0" }}>{project.tech}</p>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }}>3D Canvas</h2>
      <div style={{ height: "400px", background: "white", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}>
        <Canvas ref={canvasRef} camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 5]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <OrbitControls enableZoom={true} />
          <DataImage />
        </Canvas>
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <button
          style={{
            background: "white",
            color: "#4f46e5",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            fontSize: "1rem",
            fontWeight: "bold",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
        >
          Contact Me
        </button>
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Email: alenkurian854@gmail.com</p>
        <p style={{ fontSize: "0.875rem" }}>Phone: +91 7025086127</p>
        <p style={{ fontSize: "0.875rem" }}>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/alen-kurian-327a50183" style={{ textDecoration: "underline", color: "#c7d2fe" }} target="_blank" rel="noopener noreferrer">
            alen-kurian
          </a>
        </p>
        <a
          href="/AlenKurianResume.pdf"
          download
          style={{
            display: "inline-block",
            marginTop: "1rem",
            background: "white",
            color: "#4f46e5",
            padding: "0.5rem 1.5rem",
            borderRadius: "9999px",
            fontWeight: "600",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}
