import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useIsMounted } from "@/hooks/useIsMounted";
import { socialsLink } from "@/constants/links";
import { CopyrightOutlined } from "@ant-design/icons";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  IconButton,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react";
import SolnityLogo from "@/assets/solnity.png";

const AppFooter: React.FC = () => {
  const isMounted = useIsMounted();
  const linkHover = useColorModeValue("#78FFA1", "#78FFA1");
  const borderColor = useColorModeValue("gray.700", "gray.600");

  if (!isMounted) return null;

  const abouts = [
    { label: "Twitter / X", url: socialsLink.twitter },
    { label: "Telegram", url: socialsLink.telegram },
    { label: "Documentation", url: socialsLink.whitepaper },
  ];

  const products = [
    { label: "Javelin Engine", url: "/" },
    { label: "Collaborative Data Tagging", url: "/" },
    { label: "Smart Data Discovery", url: "/" },
  ];

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Box
      as="footer"
      bg="#000"
      color="white"
      py={10}
      // px={{ base: 2, lg: 4 }}
      borderTop="1px"
      borderColor={borderColor}
    >
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
          {/* Logo & Tagline */}
          <VStack align={{ base: "center", md: "flex-start" }}>
            <Image
              src={SolnityLogo}
              alt="Solnity Logo"
              width={140}
              height={40}
              className="rounded-full"
            />
            {/* <Text fontSize="sm" opacity={0.75}>
              BUILT.LAUNCH.FAST
            </Text> */}
          </VStack>

          {/* Links Section */}
          <Stack align={{ base: "center", md: "flex-start" }} spacing={2}>
            <Heading
              as="h6"
              size="sm"
              textTransform="uppercase"
              color="#78FFA1"
            >
              Products
            </Heading>
            {products.map(({ label, url }, idx) => (
              // <Link key={idx} href={url} passHref>
              <Text
                key={idx}
                as="a"
                fontSize="sm"
                _hover={{ color: linkHover, textDecoration: "underline" }}
              >
                {label}
              </Text>
              // </Link>
            ))}
          </Stack>

          <Stack align={{ base: "center", md: "flex-start" }} spacing={2}>
            <Heading
              as="h6"
              size="sm"
              textTransform="uppercase"
              color="#78FFA1"
            >
              Socials
            </Heading>
            {abouts.map(({ label, url }, idx) => (
              <Link key={idx} href={url} passHref>
                <Text
                  as="a"
                  fontSize="sm"
                  _hover={{ color: linkHover, textDecoration: "underline" }}
                >
                  {label}
                </Text>
              </Link>
            ))}
          </Stack>

          <Stack align={{ base: "center", md: "flex-start" }} spacing={2}>
            <Heading
              as="h6"
              size="sm"
              textTransform="uppercase"
              color="#78FFA1"
            >
              Contact Us
            </Heading>
            <Link
              href={socialsLink.email}
              rel="noopener noreferrer"
              className={`underline underline-offset-4 hover:${linkHover} no-underline`}
            >
              support@usejavelinai.com
            </Link>
          </Stack>

          {/* Placeholder or additional info */}
          {/* <Stack
            align={{ base: "center", md: "flex-start" }}
            spacing={3}
            opacity={0.75}
            fontSize="sm"
          >
            <HStack spacing={2}>
              <Text>Built with ♡ by JavelinAI Team</Text>
            </HStack>
            <Text>© JavelinAI 2025. All rights reserved.</Text>
          </Stack> */}
        </SimpleGrid>

        {/* <Stack
          align={{ base: "center", md: "flex-start" }}
          spacing={3}
          opacity={0.75}
          fontSize="sm"
        >
          <HStack spacing={2}>
            <Text>Built with ♡ by JavelinAI Team</Text>
          </HStack>
          <Text>© JavelinAI 2025. All rights reserved.</Text>
        </Stack> */}
        <div className="flex flex-wrap items-center justify-between mt-8">
          <Stack
            align={{ base: "center", md: "flex-start" }}
            spacing={3}
            opacity={0.75}
            fontSize="sm"
            className="w-full md:w-1/2"
          >
            {/* <HStack spacing={2}>
              <Text>Built with ♡ by JavelinAI Team</Text>
            </HStack> */}
            <Text>© JavelinAI 2025. All rights reserved.</Text>
          </Stack>
          {/* Scroll to top */}
          <Box textAlign="right" className="absolute md:relative right-4">
            <IconButton
              aria-label="Scroll to top"
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              }
              variant="outline"
              borderColor="#3DFF91"
              color="#78FFA1"
              _hover={{ bg: "rgba(61,255,145,0.1)" }}
              onClick={scrollToTop}
            />
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default AppFooter;
