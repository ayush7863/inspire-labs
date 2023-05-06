import React from "react";
import styles from "./Navbar.module.css";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <nav id={styles.navbar}>
        <Box
          bg="darkBlue"
          color="white"
          border="0px solid black"
          id={styles.firstNav}
        >
          <div>
            <div>
              <i class="fa-solid fa-envelope"></i>sales@inspironlabs.com
            </div>
            <div>
              <img
                src="https://www.inspironlabs.com/assets/img/flag/india.png"
                alt=""
                width="20px"
              />{" "}
              +91-789-269-7903
            </div>
            <div>
              <img
                src="https://www.inspironlabs.com/assets/img/flag/united-states.png"
                alt=""
                width="20px"
              />
              +1-206-922-2057
            </div>
          </div>
        </Box>
        <Box id={styles.main}>
          <Box>
            <Image
              src="https://www.inspironlabs.com/assets/img/logo/logo.svg"
              alt="logo"
              w={"190px"}
            ></Image>
          </Box>
          <ul className={show ? styles.nav_links:styles.nav_menu_links}>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">industries</a>
            </li>
            <li>
              <a href="#">portfolio</a>
            </li>
            <li>
              <a href="#">company</a>
            </li>
            <li>
              <a href="#">staff augmentation</a>
            </li>
            <button id={styles.contactBtn}>Contact</button>
          </ul>
          <Box className={styles.hamburger_menu}>
            <a href="*" onClick={() => setShow(!show)}>
              <i class="fa-solid fa-bars" id={styles.hamburger}></i>
            </a>
          </Box>
        </Box>
      </nav>
    </div>
  );
};

export default Navbar;
