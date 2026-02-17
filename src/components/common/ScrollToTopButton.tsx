import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
// Style
import { useColorModeTheme } from "@/constants/style";
//Icon
import { LuArrowUp } from "react-icons/lu";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { textColorMode, bgColorMode, borderColorMode } = useColorModeTheme();

  // 1. Logic to show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is scrolled more than 400px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up the listener on unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 2. Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      onClick={scrollToTop}
      // 1. Fixed Position - Bottom Center
      position="fixed"
      bottom={{ base: "2.5rem", lg: "3.5rem" }} // Distance from the bottom
      left="50%" // Move to the middle of the screen
      // 2. Centering & Animation Logic
      // translateX(-50%) centers it horizontally
      // translateY(0) vs translateY(20px) handles the pop-up animation
      transform={isVisible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(20px)"}
      // 3. Making the icon perfectly centered inside
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="0"
      width="10" // Slightly larger for a middle-screen button
      height="10"
      // 4. Visibility and Transitions
      opacity={isVisible ? 1 : 0}
      pointerEvents={isVisible ? "auto" : "none"}
      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" // "Bouncy" entrance
      zIndex="skipLink"
      // Styling
      border="1px solid"
      borderColor={borderColorMode}
      rounded="full"
      color={textColorMode}
      bgColor={bgColorMode}
      _hover={{
        transform: "translateX(-50%) scale(1.1)", // Keep it centered while hovering
      }}
      _active={{
        transform: "translateX(-50%) scale(1.1)", // Keep it centered while hovering
      }}
      backdropFilter="blur(3px)"
    >
      <LuArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
