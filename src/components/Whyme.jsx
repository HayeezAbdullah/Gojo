import { motion } from "framer-motion";
const Whyme = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-center whymetext my-4">Why Me?</p>
      <motion.div className="mx-auto whymecards container  my-1  row ">
        <div className="col-md-3 mx-1 my-3 secone d-flex flex-column justify-content-end">
          <motion.div className="">
            <h4 className="p-2 mt-4 text-bold">Good!</h4>
            <p className="p-2">
              "Hey there, it's me, Gojo Satoru, your friendly neighborhood
              Jujutsu sorcerer. My lessons are so captivating that even the
              toughest curses sit quietly. I'm not just the Sorcerer of Tokyo
              Jujutsu High; I'm also the 'Sorcerer of Making Jujutsu Look
              Easy.'"
            </p>
            <motion.button
              className="hiremebtn m-3 mx-0 p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.999 }}
            >
              Contact&nbsp;Me!
            </motion.button>
          </motion.div>
        </div>

        <div className="col-md-3 mx-1  secone my-3 d-flex flex-column justify-content-end">
          <motion.div className="">
            <h4 className="p-2 mt-4 text-bold">Better!</h4>
            <p className="p-2">
              "You know, I'm not just a powerful sorcerer; I'm also an
              incredible Jujutsu teacher. My lessons are legendary – so
              captivating that even curses can't look away. I've even been in a
              staring contest with a curse, and guess what? The curse blinked
              first!"
            </p>
            <motion.button
              className="hiremebtn m-3 mx-0 p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.999 }}
            >
              Contact&nbsp;Me!
            </motion.button>
          </motion.div>
        </div>

        <div className="col-md-3 mx-1 secone  my-3 d-flex flex-column justify-content-end">
          <motion.div className="">
            <h4 className="p-2 mt-4 text-bold">Best!</h4>
            <p className="p-2">
              "Move over, professors! I, Gojo Satoru, am on a mission to be the
              best Jujutsu teacher. My classes are such a hit that even the
              classroom crows want in. Students line up to hear me say, 'Let's
              start today's lesson,' because with me, it's always a great show
              on Earth!"
            </p>
            <motion.button
              className="hiremebtn m-3 mx-0 p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.999 }}
            >
              Contact&nbsp;Me!
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Whyme;
