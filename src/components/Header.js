import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Box, HStack, VStack, Image, transform } from "@chakra-ui/react";

const socials = [
  {
    icon: "linkedin.svg",
    url: "https://www.linkedin.com/in/ahmed9ww/",
  },
  {
    icon: "github.svg",
    url: "https://github.com/ahmed6ww",
  },
];
const navLinks = [
  {
    name: "Projects",
    href: "#Projects",
  },
  {
    name: "Contact",
    href: "#Contact",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      className={`navbar ${visible ? "block" : "hidden"}`}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={200} // Ensure the header appears above other content
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={18}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={5}>
              {socials.map((link) => (
                <a href={link.url}>
                  <Image boxSize="33px" src={link.icon} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {navLinks.map((link) => (
                <a
                  onClick={() => scrollToSection(link.href)}
                  style={{ cursor: "pointer" }}
                >
                  {link.name}{" "}
                </a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
