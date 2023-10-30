import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      className="mx-auto container secone mb-4  row "
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <hr className="" /> */}
      <motion.div className="col-md-6">
        <motion.img
          whileTap={{ scale: 0.99 }}
          src="imagetwo.png"
          className="img-fluid"
          alt="Gojo Satoru"
        />
      </motion.div>
      <div className="col-md-6 my-3 d-flex flex-column justify-content-end ">
        <motion.div className="">
          <p className="heroname my-0">Gojo&nbsp;Satoru&nbsp;</p>
          <p className=" herotitle my-0">Jujutsu Sorcerer</p>
          <motion.button
            className="hiremebtn my-3 p-2 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ x: 600 }}
          >
            Hire&nbsp;Me!
          </motion.button>
        </motion.div>
      </div>
      {/* <hr /> */}
    </motion.div>
  );
};

export default Intro;
