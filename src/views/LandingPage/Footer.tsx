import { useTranslation } from "react-i18next";
import { Center, Text } from "@chakra-ui/react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Center>
      <Text color="secondaryTextColor" fontSize={{ base: "xs", md: "md" }}>
        &copy; {t("2026 Sok Sovannarith. All Rights Reserved.")}
      </Text>
    </Center>
  );
};

export default Footer;
