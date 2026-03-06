import { motion } from "framer-motion";

function Projects() {
  return (
    <section>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Projects
      </motion.h2>

      <motion.div whileHover={{ scale: 1.05 }}>
        <h3 classname="text-danger">Exam Prep Website</h3>
        <video src="exam-prep.mp4" controls width="80%" />
      </motion.div>
<div className="mt-5 mb-5">
     <a href="https://client-amber-three-51.vercel.app" className="text-danger"><h2 className="text-danger">Deployed link</h2></a> </div>


      <motion.div whileHover={{ scale: 1.05 }}>
        <h3>Restaurant Landing Page</h3>
        <video src="/Moti-Mahal-Project.mp4" controls width="80%" />
      </motion.div>
<div className="mt-5 mb-5">
     <a href="https://moti-mahal-frontend.vercel.app/" className="text-danger"><h2 className="text-danger">Deployed link</h2></a> </div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <h3>Basketball Scorecard</h3>
        <video src="/qureshi-meat-corner.mp4" controls width="80%" />
      </motion.div>
      <div className="mt-5 mb-5">
     <a href="https://qureshi-chicken-mutton-shop.vercel.app/" className="text-danger"><h2 className="text-danger">Deployed link</h2></a> </div>
    </section>
  );
}

export default Projects;
