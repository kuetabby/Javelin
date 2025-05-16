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

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Box as="footer" bg="#0B1E16" color="white" py={10} borderTop="1px" borderColor={borderColor}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Logo & Tagline */}
          <VStack align={{ base: "center", md: "flex-start" }}>
            <Image src={SolnityLogo} alt="Solnity Logo" width={140} height={40} />
            <Text fontSize="sm" opacity={0.75}>
              Empowering Solana developers with sleek, integrated tools.
            </Text>
          </VStack>

          {/* Links Section */}
          <Stack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Heading as="h6" size="sm" textTransform="uppercase" color="#78FFA1">
              Info
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

          {/* Placeholder or additional info */}
          <Stack align={{ base: "center", md: "flex-start" }} spacing={3} opacity={0.75} fontSize="sm">
            <Text>© Javeline AI 2025. All rights reserved.</Text>
            <HStack spacing={2}>
              <Text>Built with ♡ by Javeline Team</Text>
            </HStack>
          </Stack>
        </SimpleGrid>

        {/* Scroll to top */}
        <Box textAlign="right" mt={8}>
          <IconButton
            aria-label="Scroll to top"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>}
            variant="outline"
            borderColor="#3DFF91"
            color="#78FFA1"
            _hover={{ bg: "rgba(61,255,145,0.1)" }}
            onClick={scrollToTop}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AppFooter;
