"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Flex,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import clsx from "clsx";

import powerLinkLogo from "@/assets/PowerLink-Logo.png";
import { kanitBold } from "@/utils/font";
import { socialsLink } from "@/constants/links";
import { TwitterIcon, TeleIcon } from "@/utils/Icon/socials";
import PageTabs from "../PageTabs";
import { NavbarDrawer } from "./Drawer";
import SolnityLogo from "@/assets/solnity.png";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  /* auto-close drawer kalau layar dibesar-kecilkan */
  useEffect(() => {
    if (isDesktop && isOpen) onClose();
  }, [isDesktop]);

  /* navbar lurus, lalu jadi glassy saat scroll */
  const scrolled =
    typeof window !== "undefined" && window.scrollY > 160 ? "nav-glass" : "";

  return (
    <header
      className={clsx(
        "fixed inset-x-0 z-50 transition-all",
        scrolled,
        kanitBold.className
      )}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, lg: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* brand */}
        <Link href="/">
          <Image
            src={SolnityLogo}
            alt="Grownetic"
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* nav links – desktop */}
        <PageTabs containterClass="hidden lg:flex" />

        {/* CTA + socials – desktop */}
        <Flex className="hidden lg:flex" align="center" gap={4}>
          <Link href={socialsLink.twitter} target="_blank">
            <TwitterIcon className="fill-white hover:fill-primary" />
          </Link>
          <Link href={socialsLink.telegram} target="_blank">
            <TeleIcon className="fill-white hover:fill-primary" />
          </Link>
        </Flex>

        {/* hamburger – mobile */}
        <IconButton
          aria-label="Menu"
          onClick={onToggle}
          className="lg:hidden"
          icon={
            isOpen ? (
              <CloseOutlined className="text-xl" />
            ) : (
              <MenuOutlined className="text-xl" />
            )
          }
          variant="ghost"
          color="white"
        />
      </Flex>

      {/* drawer untuk mobile */}
      <NavbarDrawer isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Navbar;
