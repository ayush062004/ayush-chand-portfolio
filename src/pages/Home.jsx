import { motion } from "framer-motion";

function Home() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          flexWrap: "wrap",
          maxWidth: "1100px",
        }}
      >
        {/* LEFT SIDE — IMAGE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/profilepic.jpg"
            alt="Ayush Chand"
            style={{
              width: "260px",
              borderRadius: "20px",
              boxShadow: "0 0 30px rgba(0,247,255,0.4)",
            }}
          />
        </motion.div>

        {/* RIGHT SIDE — TEXT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: "500px" }}
        >
          <h1 style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
            Hi, I'm <span style={{ color: "#00f7ff" }}>Ayush Chand</span>
          </h1>

          <h3 style={{ marginBottom: "20px", color: "#aaa" }}>
            Fullstack Developer 
          </h3>

          <p style={{ lineHeight: "1.7", marginBottom: "25px" }}>
            I build modern, responsive, and high-performance websites. I enjoy
            transforming ideas into digital experiences using React, JavaScript,
            and creative UI/UX design. My goal is to create smooth, engaging,
            and user-friendly interfaces.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href="/projects"
              style={{
                padding: "10px 20px",
                background: "#00f7ff",
                color: "#000",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View Projects
            </a>

            <a
              href="/contact"
              style={{
                padding: "10px 20px",
                border: "2px solid #00f7ff",
                borderRadius: "25px",
                textDecoration: "none",
                color: "#00f7ff",
                fontWeight: "bold",
              }}
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
