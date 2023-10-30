import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      className="mx-auto container secone my-4  row "
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center  pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Gallery
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
        </ul>
        <hr />
        <p class="text-center text-muted">© 2023 Hayeez Abdullah</p>
      </footer>
    </motion.div>
  );
};

export default Footer;
