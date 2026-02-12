import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Button, Flex, Group, Heading, Image, Span, Text } from "@chakra-ui/react";
// Image
import Logo from "/profile.jpg";
import Love from "@/assets/icons/love.png";
// Icons
import { LuDownload, LuMail, LuMapPin, LuMoon, LuSun } from "react-icons/lu";

const HeaderSection = () => {
  const { i18n, t } = useTranslation();
  const [lng, setLng] = useState<string>(() => localStorage.getItem("language") || "en");

  // Keep i18next in sync on first render (and if lng changes)
  useEffect(() => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  }, [lng, i18n]);

  const handleChangeLanguage = (next: "en" | "kh") => {
    setLng(next); // triggers re-render + effect above runs
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" gap="1rem">
      <Flex alignItems="center" gap={{ base: "1rem", lg: "1.75rem" }}>
        {/* Profile */}
        <Box
          width={{ base: "100px", md: "150px", lg: "150px" }}
          height={{ base: "100px", md: "150px", lg: "150px" }}
          minWidth={{ base: "100px", md: "150px", lg: "150px" }}
          minHeight={{ base: "100px", md: "150px", lg: "150px" }}
          rounded="lg"
          border="1px solid"
          borderColor="borderColor"
          overflow="hidden"
        >
          <Image src={Logo} alt="Handsome Boy!" loading="lazy" width="100%" height="100%" />
        </Box>
        {/* Info */}
        <Flex direction="column" justifyContent="space-between" width="100%">
          {/* Name */}
          <Flex alignItems="flex-start" justifyContent="space-between" gap="0.5rem">
            <Heading fontSize={{ base: "lg", md: "xl", lg: "2xl" }} position="relative" width="fit-content">
              {t("SOK Sovannarith")}
              <Box boxSize="25px" position="absolute" top="-1rem" right="-1rem">
                <Image src={Love} alt="Love" loading="lazy" width="100%" height="100%" />
              </Box>
            </Heading>
            {/* Toggle Theme */}
            <Button variant="outline" onClick={toggleColorMode} rounded="lg" size={{ base: "xs", lg: "sm" }}>
              {colorMode === "dark" ? <LuMoon /> : <LuSun />}
            </Button>
          </Flex>
          {/* Location */}
          <Flex alignItems="center" gap="0.35rem" fontSize="xs" color="secondaryTextColor">
            <Span>
              <LuMapPin />
            </Span>
            <Text>{t("Phnom Penh, Cambodia")}</Text>
          </Flex>
          {/* Role */}
          <Text fontWeight="semibold" marginBlock={{ base: "0.45rem 0.25rem", md: "0.35rem" }} fontSize={{ base: "sm", md: "md" }}>
            {t("Frontend Developer")}
          </Text>
          {/* Actions - Table & Desktop */}
          <Flex gap="0.5rem" display={{ base: "none", md: "flex" }}>
            {/* Download CV */}
            <Button
              paddingInline="1rem"
              alignItems="center"
              variant="outline"
              _hover={{ bgColor: "darkBg", color: "lightText", transform: "translateY(-3px)" }}
              transition="all 0.3s"
              rounded="md"
            >
              <LuDownload />
              <Text lineHeight={1} fontWeight="semibold">
                {t("Download CV")}
              </Text>
            </Button>
            {/* Send Email */}
            <Button
              paddingInline="1rem"
              alignItems="center"
              variant="outline"
              _hover={{ bgColor: "darkBg", color: "lightText", transform: "translateY(-3px)" }}
              transition="all 0.3s"
              rounded="md"
            >
              <LuMail />
              <Text lineHeight={1} fontWeight="semibold">
                {t("Send Email")}
              </Text>
            </Button>
            {/* Language Switcher */}
            <Group attached rounded="lg">
              <Button
                variant="outline"
                fontWeight="semibold"
                onClick={() => handleChangeLanguage("kh")}
                bgColor={lng === "kh" ? "darkBg" : undefined}
                color={lng === "kh" ? "lightText" : undefined}
                _hover={{ transform: "translateY(-3px)" }}
                _active={{ transform: "translateY(-3px)" }}
              >
                {t("KH")}
              </Button>

              <Button
                variant="outline"
                fontWeight="semibold"
                onClick={() => handleChangeLanguage("en")}
                bgColor={lng === "en" ? "darkBg" : undefined}
                color={lng === "en" ? "lightText" : undefined}
                _hover={{ transform: "translateY(-3px)" }}
                _active={{ transform: "translateY(-3px)" }}
              >
                {t("EN")}
              </Button>
            </Group>
          </Flex>
        </Flex>
      </Flex>
      {/* Actions - Mobile */}
      <Flex gap="0.5rem" display={{ base: "flex", md: "none" }}>
        {/* Download CV */}
        <Button
          paddingInline="1rem"
          alignItems="center"
          variant="outline"
          _hover={{ bgColor: "darkBg", color: "lightText", transform: "translateY(-3px)" }}
          _active={{ bgColor: "darkBg", color: "lightText", transform: "translateY(-3px)" }}
          transition="all 0.3s"
          rounded="md"
          size="xs"
        >
          <LuDownload />
          <Text lineHeight={1} fontWeight="semibold">
            {t("Download CV")}
          </Text>
        </Button>
        {/* Send Email */}
        <Button
          paddingInline="1rem"
          alignItems="center"
          variant="outline"
          _hover={{ bgColor: "darkBg", color: "lightText", transform: "translateY(-3px)" }}
          _active={{ bgColor: "darkBg", color: "lightText", transform: "translateY(-3px)" }}
          transition="all 0.3s"
          rounded="md"
          size="xs"
        >
          <LuMail />
          <Text lineHeight={1} fontWeight="semibold">
            {t("Send Email")}
          </Text>
        </Button>
        {/* Language Switcher */}
        <Group attached rounded="lg">
          <Button
            variant="outline"
            fontWeight="semibold"
            onClick={() => handleChangeLanguage("kh")}
            bgColor={lng === "kh" ? "darkBg" : undefined}
            color={lng === "kh" ? "lightText" : undefined}
            size="xs"
            _hover={{ transform: "translateY(-3px)" }}
            _active={{ transform: "translateY(-3px)" }}
            transition="all 0.3s"
          >
            {t("KH")}
          </Button>

          <Button
            variant="outline"
            onClick={() => handleChangeLanguage("en")}
            bgColor={lng === "en" ? "darkBg" : undefined}
            color={lng === "en" ? "lightText" : undefined}
            size="xs"
            _hover={{ transform: "translateY(-3px)" }}
            _active={{ transform: "translateY(-3px)" }}
          >
            {t("EN")}
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
};

export default HeaderSection;
