"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flex,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { kanitBold } from "@/utils/font";
import { socialsLink } from "@/constants/links";
import { TwitterIcon, TeleIcon } from "@/utils/Icon/socials";
import PageTabs from "../PageTabs";
import { NavbarDrawer } from "./Drawer";
import SolnityLogo from "@/assets/solnity.png";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  // Scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // ubah nilai kalau perlu
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close drawer on resize
  useEffect(() => {
    if (isDesktop && isOpen) onClose();
  }, [isDesktop]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 z-50 transition-all duration-300 bg-black",
        kanitBold.className
        // isScrolled
        //   ? "bg-black"
        //   : // ? "backdrop-blur-md bg-black/60 border-b border-white/10 shadow-sm"
        //     "bg-transparent"
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
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src={SolnityLogo}
            alt="JavelinAI Logo"
            priority
            className="h-16 w-auto"
          />
          <span className="ml-1 text-white text-xl font-semibold">
            Javelin AI
          </span>
        </Link>

        {/* Navigation – Desktop */}
        <PageTabs containterClass="hidden lg:flex" />

        {/* Socials – Desktop */}
        <Flex className="hidden lg:flex" align="center" gap={4}>
          <Link href={socialsLink.twitter} target="_blank">
            <TwitterIcon className="fill-white hover:fill-primary" />
          </Link>
          <Link href={socialsLink.telegram} target="_blank">
            <TeleIcon className="fill-white hover:fill-primary" />
          </Link>
        </Flex>

        {/* Hamburger – Mobile */}
        <IconButton
          aria-label="Menu"
          onClick={onToggle}
          className="lg:hidden"
          icon={
            isOpen ? (
              <CloseOutlined className="text-xl text-white" />
            ) : (
              <MenuOutlined className="text-xl text-white" />
            )
          }
          variant="ghost"
        />
      </Flex>

      {/* Drawer – Mobile */}
      <NavbarDrawer isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Navbar;
