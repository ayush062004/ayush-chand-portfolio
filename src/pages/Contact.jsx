import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          padding: "45px",
          borderRadius: "20px",
          width: "360px",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
        }}
      >
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: "30px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          Contact Me
        </motion.h2>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:chandayush062004@gmail.com"
          style={linkStyle}
        >
          <FaEnvelope /> &nbsp; Email
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://github.com/ayush062004"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          <FaGithub /> &nbsp; GitHub
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://www.linkedin.com/in/ayush-chand-304879292/"
          style={linkStyle}
        >
          <FaLinkedin /> &nbsp; LinkedIn
        </motion.a>
      </motion.div>
    </div>
  );
}

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  textDecoration: "none",
  color: "#e2e8f0",
  background: "rgba(255,255,255,0.08)",
  padding: "12px",
  borderRadius: "10px",
  marginBottom: "15px",
  transition: "0.3s",
};

export default Contact;