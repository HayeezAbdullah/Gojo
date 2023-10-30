import { motion } from "framer-motion";

const Body = () => {
  return (
    <motion.div
      className="mx-auto container secone my-4  row "
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <hr className="" /> */}

      <div className="col-md-6 my-3 d-flex flex-column justify-content-end">
        <motion.div className="">
          <p className=" herointroduction my-0">
            Ohio!, I'm Gojo Satoru, the Jujutsu Sorcerer known for my unwavering
            commitment to protecting the world from cursed spirits. With mastery
            of formidable Cursed Techniques and a charismatic presence, my
            portfolio showcases the boundless potential of the Jujutsu world.
            Join me in exploring my journey, learning about my skills, and
            uncovering the mystique that surrounds me. Welcome to the world of
            Gojo Satoru, where strength and justice reign supreme.
          </p>
          <motion.button
            className="hiremebtn my-3 p-2 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.999 }}
          >
            More&nbsp;about&nbsp;Me!
          </motion.button>
        </motion.div>
      </div>
      <motion.div className="col-md-6  imagethree d-flex flex-column justify-content-center align-items-center ">
        <motion.img
          whileTap={{ scale: 0.99 }}
          src="imagethree.png"
          className="img-fluid w-50 imagethree my-3"
          alt="Gojo Satoru"
        />
      </motion.div>
      {/* <hr /> */}
    </motion.div>
  );
};

export default Body;
