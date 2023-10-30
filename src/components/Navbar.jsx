import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav class="navbar container my-4 rounded">
      <div class="container-fluid">
        <a class="navbar-brand compname">JTekc</a>
        <form class="d-flex">
          <motion.button
            className="hiremebtn my-1 p-2 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
          >
            Menu
          </motion.button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
