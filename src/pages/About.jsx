import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-section">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT SIDE IMAGE */}
        <motion.img
          src="/profilepic.jpg"
          alt="Ayush Chand"
          className="about-img"
          whileHover={{ scale: 1.05 }}
        />

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About Me
          </motion.h2>

          <p>
            Hello! I'm <span>Ayush Chand</span>, a passionate web developer who
            enjoys building modern, interactive, and responsive web
            applications. I focus on creating smooth user experiences and
            clean, efficient code.
          </p>

          <p>
            I love learning new technologies, solving real-world problems, and
            turning ideas into beautiful digital products. My main expertise is
            in frontend development with React, but I also work with backend
            tools when needed.
          </p>

          <h3>Skills</h3>

          <div className="skills-container ">
            {["HTML", "CSS", "JavaScript", "React", "Node.js"].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="skill-badge"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
