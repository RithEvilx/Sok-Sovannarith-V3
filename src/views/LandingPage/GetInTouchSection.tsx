import { useTranslation } from "react-i18next";
import { Box, Button, Center, Flex, GridItem, Heading, Input, Link, SimpleGrid, Span, Text, Textarea } from "@chakra-ui/react";
// Styles
import { ContainerHoverStyle, useColorModeTheme } from "@/constants/style";
// Icons
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
// Data
import { GetInTouchData } from "@/constants/data/GetInTouchData";
import { LuCornerDownRight } from "react-icons/lu";
import { useForm } from "react-hook-form";

type formDataType = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const GetInTouchSection = () => {
  const { t } = useTranslation();
  const { bgColorMode, textColorMode, borderColorMode } = useColorModeTheme();

  const { register, handleSubmit, reset } = useForm<formDataType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onHandleSubmit = (data: formDataType) => {
    const subject = encodeURIComponent("Inquiry from Portfolio");
    const body = encodeURIComponent(
      `Dear Mr. ${GetInTouchData?.name},\n\n` + `My name is ${data.lastName} ${data.firstName}\n\n` + `${data.message}\n\n` + `From: ${data.email}`,
    );

    const mailtoUrl = `mailto:${GetInTouchData?.email}?subject=${subject}&body=${body}`;

    // Use window.open instead of assigning to .href
    // '_self' ensures it doesn't try to open a blank new tab
    // before launching the email app.
    window.open(mailtoUrl, "_self");

    reset();
  };

  return (
    <Flex {...ContainerHoverStyle}>
      {/* Header */}
      <Heading fontSize="2xl">
        {t("Let's work")} <Span color="gray.400">{t("together.")}</Span>
      </Heading>
      {/* Content */}
      <SimpleGrid columns={12} gap="1.5rem">
        <GridItem colSpan={{ base: 12, lg: 5 }}>
          <Flex direction="column" gap="0.5rem">
            <Text color="secondaryTextColor" fontSize="xs">
              {t("FOLLOW ME")}
            </Text>
            {/* Linkedin */}
            <Flex flexWrap="wrap" gap="0.5rem">
              {GetInTouchData?.linkedin && (
                <Link
                  href={GetInTouchData.linkedin}
                  _hover={{ bgColor: bgColorMode, color: textColorMode }}
                  _active={{ bgColor: bgColorMode, color: textColorMode }}
                  transition="all 0.15s"
                >
                  <Center as="button" rounded="sm" padding="0.25rem" border="1px solid" borderColor={borderColorMode} cursor="pointer">
                    <Box fontSize="1.25rem">
                      <FaLinkedin />
                    </Box>
                  </Center>
                </Link>
              )}
              {/* GitHub */}
              {GetInTouchData?.github && (
                <Link
                  href={GetInTouchData.github}
                  _hover={{ bgColor: bgColorMode, color: textColorMode }}
                  _active={{ bgColor: bgColorMode, color: textColorMode }}
                  transition="all 0.15s"
                >
                  <Center as="button" rounded="sm" padding="0.25rem" border="1px solid" borderColor={borderColorMode} cursor="pointer">
                    <Box fontSize="1.25rem">
                      <FaGithub />
                    </Box>
                  </Center>
                </Link>
              )}
              {/* Telegram */}
              {GetInTouchData?.telegram && (
                <Link
                  href={GetInTouchData.telegram}
                  _hover={{ bgColor: bgColorMode, color: textColorMode }}
                  _active={{ bgColor: bgColorMode, color: textColorMode }}
                  transition="all 0.15s"
                >
                  <Center as="button" rounded="sm" padding="0.25rem" border="1px solid" borderColor={borderColorMode} cursor="pointer">
                    <Box fontSize="1.25rem">
                      <FaTelegram />
                    </Box>
                  </Center>
                </Link>
              )}
              {/* Email */}
              {GetInTouchData?.email && (
                <Link
                  href={`mailto:${GetInTouchData.email}`}
                  _hover={{ bgColor: bgColorMode, color: textColorMode }}
                  _active={{ bgColor: bgColorMode, color: textColorMode }}
                  transition="all 0.15s"
                >
                  <Center as="button" rounded="sm" padding="0.25rem" border="1px solid" borderColor={borderColorMode} cursor="pointer">
                    <Box fontSize="1.25rem">
                      <FaEnvelope />
                    </Box>
                  </Center>
                </Link>
              )}
              {/* Youtube */}
              {GetInTouchData?.youtube && (
                <Link
                  href={`mailto:${GetInTouchData.youtube}`}
                  _hover={{ bgColor: bgColorMode, color: textColorMode }}
                  _active={{ bgColor: bgColorMode, color: textColorMode }}
                  transition="all 0.15s"
                >
                  <Center as="button" rounded="sm" padding="0.25rem" border="1px solid" borderColor={borderColorMode} cursor="pointer">
                    <Box fontSize="1.25rem">
                      <FaYoutube />
                    </Box>
                  </Center>
                </Link>
              )}
            </Flex>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 7 }}>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <Flex direction="column" gap="0.5rem">
              <Flex alignItems="center" justifyContent="space-between">
                <Text>{t("GET IN TOUCH")}</Text>
                <Button
                  unstyled
                  type="submit"
                  display="flex"
                  alignItems="center"
                  gap="0.5rem"
                  border="1px solid"
                  borderColor={borderColorMode}
                  paddingInline="0.5rem"
                  rounded="sm"
                  _hover={{ bgColor: bgColorMode, color: textColorMode }}
                  _active={{ bgColor: bgColorMode, color: textColorMode }}
                  transition="all 0.15s"
                  cursor="pointer"
                >
                  {t("Send")}
                  <LuCornerDownRight />
                </Button>
              </Flex>
              <SimpleGrid columns={12} gap="0.6rem">
                <GridItem colSpan={{ base: 12, md: 6 }}>
                  <Input type="text" {...register("firstName")} placeholder={t("Firstname")} paddingInline="0.5rem" />
                </GridItem>
                <GridItem colSpan={{ base: 12, md: 6 }}>
                  <Input type="text" {...register("lastName")} placeholder={t("Lastname")} paddingInline="0.5rem" />
                </GridItem>
                <GridItem colSpan={12}>
                  <Input type="email" {...register("email")} placeholder={t("Email")} paddingInline="0.5rem" />
                </GridItem>
                <GridItem colSpan={12}>
                  <Textarea {...register("message")} placeholder={t("Message")} resize="none" padding="0.5rem" />
                </GridItem>
              </SimpleGrid>
            </Flex>
          </form>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default GetInTouchSection;
