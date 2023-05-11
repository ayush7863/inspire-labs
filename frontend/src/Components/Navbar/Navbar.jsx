import React from "react";
import styles from "./Navbar.module.css";
import { Box, Heading ,Text } from "@chakra-ui/react";
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
          <ul className={show ? styles.nav_links : styles.nav_menu_links}>
            <li>
              <a href="#">services</a>
              <Box className={styles.services}>                
                <Box>
                  <Heading as="h4" size="md" color="green" >
                    EnterPrise Solution
                  </Heading>
                  <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/custom.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'> Custom Software Development</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/staff.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>Product Engineering</Text>
                  </Box>
                  <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/business.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'> Business Intelligence</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/dedicated.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>Dedicated developments teams</Text>
                  </Box>
                </Box>
               <Box>
                  <Heading as="h4" size="md" color="green" >
                    Cloud adoption
                  </Heading>
                  <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/devops.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'> devops</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/aws.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>awa manage services</Text>
                  </Box>
                  <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/aws.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'> cloud consulting</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/managedit.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>24/7 managed services</Text>
                  </Box>
                </Box>                
               <Box>
                  <Heading as="h4" size="md" color="green" >
                    app  development
                  </Heading>
                  <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/web.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'> web app</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/mobile.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>mobile</Text>
                  </Box>
                  <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/uiux.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'> ui/ux</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/aiml.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>Ai/ml</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/blockchain.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>Blockchain</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/support.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>maintenance & support</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/testing.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>testing</Text>
                  </Box>
                </Box>
                <Box>
                  <Heading as="h4" size="md" color="green" >
                    digital Solution
                  </Heading>
                  <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/seo.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'> seo</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/smm.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>smm</Text>
                  </Box>
                  <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/ppc.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>ppc</Text>
                  </Box>
                   <Box className={styles.dropBox}>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      h="30px"
                      w="70px"
                      border="0px solid blue"
                      src="https://www.inspironlabs.com/assets/img/header/headerIcons/service-icons/internet.svg"
                      alt="first"
                    ></Image>
                    <Text fontSize='xs'>Internet marketing</Text>
                  </Box>
                </Box>
              </Box>
            </li>
            <li>
              <a href="#">industries</a>
            </li>
            <li>
              <a href="#">portfolio</a>
            </li>
            <li>
              <a href="#">Sign-In</a>
            </li>
            <li>
              <a href="#">Sign-Up</a>
            </li>
            <button id={show ? styles.contactButton : styles.contactBtn}>
              Contact
            </button>
          </ul>
          <Box className={styles.hamburger_menu}>
            <a href="#" onClick={() => setShow(!show)}>
              <i class="fa-solid fa-bars" id={styles.hamburger}></i>
            </a>
          </Box>
        </Box>
      </nav>
    </div>
  );
};

export default Navbar;
