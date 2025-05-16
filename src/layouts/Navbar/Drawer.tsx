import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMounted } from "@/hooks/useIsMounted";
import { socialsLink } from "@/constants/links";
import { TeleIcon, TwitterIcon } from "@/utils/Icon/socials";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const isMounted = useIsMounted();
  const pathname = usePathname();
  const accent = useColorModeValue("#00FF7F", "#00FF7F");
  const linkColor = useColorModeValue("white", "white");
  const hoverBg = useColorModeValue(
    "rgba(0,255,127,0.1)",
    "rgba(0,255,127,0.1)"
  );

  if (!isMounted) return null;

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Docs", href: socialsLink.whitepaper },
  ];

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
      <DrawerOverlay bg="rgba(0,0,0,0.6)" />
      <DrawerContent bg="#0E0F0E" px={4} py={6}>
        <DrawerCloseButton color="white" size="lg" />
        <DrawerHeader pt={8} px={0}>
          <Text fontSize="2xl" fontWeight="bold" color={accent}>
            Menu
          </Text>
        </DrawerHeader>

        <DrawerBody px={0} mt={4}>
          <VStack align="start" spacing={4}>
            {menuItems.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.href.startsWith("#") && pathname.endsWith(item.href));
              return (
                <ChakraLink
                  key={item.href}
                  as={Link}
                  href={item.href}
                  onClick={onClose}
                  fontSize="lg"
                  fontWeight={isActive ? "bold" : "normal"}
                  color={linkColor}
                  _hover={{ bg: hoverBg, color: accent }}
                  px={3}
                  py={2}
                  borderRadius="md"
                  w="full"
                >
                  {item.label}
                </ChakraLink>
              );
            })}
          </VStack>

          <VStack
            align="start"
            spacing={3}
            mt={8}
            pt={4}
            borderTop="1px solid"
            borderColor="gray.700"
          >
            <Text fontSize="sm" fontWeight="semibold" color="gray.400">
              Follow us
            </Text>
            <HStack spacing={4}>
              <ChakraLink
                href={socialsLink.twitter}
                isExternal
                onClick={onClose}
                _hover={{ color: accent }}
              >
                <TwitterIcon />
              </ChakraLink>
              <ChakraLink
                href={socialsLink.telegram}
                isExternal
                onClick={onClose}
                _hover={{ color: accent }}
              >
                <TeleIcon />
              </ChakraLink>
            </HStack>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
