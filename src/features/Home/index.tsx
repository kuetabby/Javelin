"use client";
import { useEffect, useRef, useState } from "react";
import { FaCoins, FaNetworkWired, FaHashtag, FaDatabase } from "react-icons/fa";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";
import bgHero from "@/assets/hero-bg.png";

import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
import { kanit, kanitBold } from "@/utils/font";
import { features } from "./constants/features";
import { motion } from "framer-motion";
import bgArch from "@/assets/background_2.png";
import bgGlow from "@/assets/background_3.png";
import bgGlow2 from "@/assets/background_4.png";

import IconWebWorkflow from "@/assets/icon_web_1.png";
import IconLaunchFast from "@/assets/icon_web_2.png";

import IconFeature1 from "@/assets/icon_feature_1.png";
import IconFeature2 from "@/assets/icon_feature_2.png";
import IconFeature3 from "@/assets/icon_feature_3.png";

// import "./style.css";
// import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useToast,
  Grid,
  Circle,
  VStack,
  Center,
} from "@chakra-ui/react";
// import welcomeBackground from "@/assets/welcome.gif"
import clsx from "clsx";
import Chip from "@/components/Chip";
import AboutImage3 from "@/assets/about-3-powerlink.png";
import { investments } from "./constants/investments";
import TextGradient from "@/components/Text/TextGradient";

import {
  ArrowRightOutlined,
  CopyOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import FAQSection from "./sections/FAQSections";
import RoadmapStepper from "./sections/RoadmapSections";
import { Image } from "@chakra-ui/next-js";
import FeatureRibbon from "@/components/Lines/FeatureRibbon";

const MotionBox = motion(Box);

interface Props {}

const TildeIcon = (props: any) => (
  <svg
    width="20"
    height="10"
    viewBox="0 0 20 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 5C1 5 4.5 1 10 5C15.5 9 19 5 19 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RefreshCwAltIcon = (props: any) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 10.0001C2.5 14.1422 5.85786 17.5001 10 17.5001C14.1421 17.5001 17.5 14.1422 17.5 10.0001C17.5 5.85796 14.1421 2.5001 10 2.5001C8.11078 2.5001 6.41089 3.14767 5.11003 4.2315M5.11003 4.2315L2.5 1.8751M5.11003 4.2315L7.46675 4.3751M5.11003 4.2315L4.96675 6.6251"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const parent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

/* kartu kanan – tetap Solvra */
const cardsData = [
  {
    id: 1,
    title: "Start Small, Launch Fast",
    desc: "Get up and running in minutes with ready-to-use AI modules.",
    hasPlaceholderIcon: true,
    icon: IconLaunchFast,
  },
  {
    id: 2,
    title: "Plug Into Your Workflow",
    desc: "Connect your tools and data sources effortlessly with no coding needed.",
    hasPlaceholderIcon: true,
    icon: IconWebWorkflow,
    customIcons: [
      { type: "tilde", id: "how-tilde-icon" },
      { type: "refresh", id: "how-refresh-icon" },
    ],
  },
];

const Home: React.FC<Props> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useIsMounted();
  const toast = useToast();
  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  function NavDot({ icon }: { icon: "up" | "down" }) {
    return (
      <span className="grid place-items-center w-8 h-8 rounded-full border border-[#2a2a2a] text-[#78FFA1] cursor-pointer">
        {icon === "up" ? "˄" : "˅"}
      </span>
    );
  }

  if (isMounted && isLoaded) {
    return (
      <div className={` homepage-container ${kanit.className}`}>
        <div id="welcome" className="relative z-30" />

        <section className="hero-bg min-h-screen flex items-center justify-center">
          <Image src={bgHero} alt="" fill priority className="hero-bg__img" />

          <Flex
            direction="column"
            align="center"
            textAlign="center"
            px={4}
            zIndex={10}
          >
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.6 }}
              className={clsx(
                "mt-6 max-w-[650px] text-sm sm:text-base text-[#CBCBCB] uppercase",
                kanit.className
              )}
            >
              FASTER. SAFERS. SMARTER
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.6 }}
              className={clsx(
                "max-w-[850px] text-3xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-tight",
                kanitBold.className
              )}
            >
              Precision AI, Sharpened by
              <br />
              Your Data
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.6 }}
              className={clsx(
                "mt-6 max-w-[650px] text-sm sm:text-base text-[#CBCBCB] uppercase",
                kanit.className
              )}
            >
              Unleash the true power of Generative AI with enterprise-grade
              tools to discover, enhance, and govern your most valuable data.
            </MotionBox>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: [0.42, 0, 0.58, 1],
              }}
            >
              <Button
                as="a"
                href={socialsLink.whitepaper}
                target="_blank"
                rel="noopener"
                rounded="full"
                px={8}
                py={6}
                size="lg"
                variant="outline"
                borderColor="#78FFA1"
                _hover={{ bg: "whiteAlpha.200" }}
                color="white"
              >
                Build AI{" "}
                <Box as="span" ml="0.5em">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7H12M8 2L13 7L8 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Button>

              <Button
                rounded="full"
                px={8}
                py={6}
                size="lg"
                // bg="#78FFA1"
                _hover={{ bg: "#5FFF8F" }}
                color="white"
                variant="outline"
                borderColor="#78FFA1"
              >
                Buy $JAVELIN{" "}
                <Box as="span" ml="0.5em">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7H12M8 2L13 7L8 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Button>
            </motion.div>

            {/* play button bottom-right */}
            <motion.div
              className="absolute bottom-16 right-8"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <a
                href={socialsLink.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full p-5 bg-[#78FFA119] ring-1 ring-[#78FFA1] hover:bg-[#78FFA126] transition-colors duration-200"
              >
                <FileTextOutlined className="text-[#78FFA1]" />
              </a>
            </motion.div>
          </Flex>

          <div className="absolute bottom-16 left-8">
            <FeatureRibbon data={features} />
          </div>
        </section>

        <div id="features" />
        <section className="relative isolate overflow-hidden py-28 lg:py-40 lg:pt-56 lg:pb-44">
          {/* glowing arch background */}
          <Image
            src={bgArch}
            alt=""
            fill
            priority
            sizes="100vw"
            className="
      pointer-events-none select-none -z-10
      object-cover
      w-full h-[120%]
      translate-y-[-15%] lg:translate-y-[-10%]
    "
          />

          <VStack spacing={6} maxW="6xl" mx="auto" px={4} mt={12}>
            {/* small pill */}
            <Text
              fontSize="sm"
              px={4}
              py={1.5}
              rounded="full"
              border="1px"
              borderColor="#3DFF91"
              color="#3DFF91"
              letterSpacing="wider"
            >
              Features
            </Text>

            {/* headline & sub */}
            <Text
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              textAlign="center"
              color="white"
            >
              Built to Grow With You.
            </Text>
            <Text
              maxW="lg"
              textAlign="center"
              color="gray.300"
              fontSize="sm"
              lineHeight="1.6"
            >
              JavelinAI gives teams everything they need to build aligned, high
              performing models
            </Text>
          </VStack>

          {/* feature cards */}
          <MotionBox
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            maxW="7xl"
            mx="auto"
            mt={{ base: 16, lg: 24 }}
            px={4}
          >
            <Grid
              templateColumns={{
                base: "repeat(1, minmax(0,1fr))",
                md: "repeat(2, minmax(0,1fr))",
                lg: `repeat(${investments.length}, minmax(0,1fr))`,
              }}
              gap={{ base: 8, lg: 10 }}
              justifyContent="center"
              textAlign="center"
            >
              {investments.map(({ title, desc, img }, idx) => (
                <MotionBox
                  key={idx}
                  variants={card}
                  whileHover={{
                    y: -10,
                    boxShadow: "0px 20px 30px rgba(0,255,170,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  bgGradient="linear(to-b, #3b3b3b 0%, #0f0f0f 70%)"
                  rounded="2xl"
                  overflow="hidden"
                  px={8}
                  pt={10}
                  pb={12}
                  maxW="xs"
                  mx="auto"
                >
                  {/* icon - centered */}
                  <Center w="full" mb={6}>
                    <Box w={16}>
                      <Image
                        src={img}
                        alt={title}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </Box>
                  </Center>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                    mb={3}
                    textAlign="center"
                  >
                    {title}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.300"
                    lineHeight="1.5"
                    textAlign="center"
                  >
                    {desc}
                  </Text>
                </MotionBox>
              ))}
            </Grid>
          </MotionBox>
        </section>

        <section className="relative isolate overflow-hidden py-28 lg:py-36 px-5 lg:px-8 text-white">
          <div className="mx-auto w-full max-w-[1240px]">
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div className="text-center lg:text-left">
                <span className="inline-block text-xs px-4 py-1.5 border border-green-400 rounded-full text-green-400 uppercase tracking-wider mb-4">
                  Why $JAVELIN
                </span>
                <p className="text-sm text-gray-300 max-w-sm mb-6 mx-auto lg:mx-0">
                  Why settle for rigid tools when you can grow with AI that
                  evolves?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end text-center sm:text-right">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-0 w-full sm:w-auto">
                  Smarter Systems,
                  <br /> Limitless Growth
                </h2>
                <Link
                  href="#"
                  className="text-[#78FFA1] text-sm font-medium inline-flex items-center justify-center gap-1 hover:text-white mt-4 sm:mt-0 sm:ml-6"
                >
                  More Benefit
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      d="M2 7h10M7 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {/* <div id="tokenomics" className="h-[1em] lg:h-[8em] relative z-30" />
            <section className="relative isolate overflow-hidden py-24 px-6 lg:px-20 text-white bg-black rounded-none lg:rounded-[40px]">
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#59D27933] blur-[120px]" />
              </div>

              <div className="relative z-10 max-w-[1240px] mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Our Tokenomics
                  </h2>
                  <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base">
                    Designed for long-term growth and sustainability
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                  {[
                    {
                      icon: (
                        <FaHashtag className="text-[#59D279] w-8 h-8 mb-2" />
                      ),
                      label: "Ticker",
                      value: "JAVAI",
                    },
                    {
                      icon: <FaCoins className="text-[#59D279] w-8 h-8 mb-2" />,
                      label: "Token Name",
                      value: "Java AI Token",
                    },
                    {
                      icon: (
                        <FaDatabase className="text-[#59D279] w-8 h-8 mb-2" />
                      ),
                      label: "Total Supply",
                      value: "1,000,000,000",
                    },
                    {
                      icon: (
                        <FaNetworkWired className="text-[#59D279] w-8 h-8 mb-2" />
                      ),
                      label: "Network",
                      value: "Solana",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center p-6 rounded-xl bg-[#141414] border border-[#59D27922] shadow-[0_0_24px_#59D27933] hover:shadow-[0_0_48px_#59D27966] transition duration-300"
                    >
                      {item.icon}
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <span className="font-bold text-lg text-white">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section> */}
          </div>
        </section>

        <div id="how-it-works" />
        <Box
          as="section"
          id="how"
          position="relative"
          isolation="isolate"
          overflow="hidden" // Penting untuk memotong glow yang meluap keluar section
          minH={{ base: "auto", lg: "960px" }}
          py={{ base: 16, lg: 0 }}
          display="flex"
          alignItems="center"
        >
          {/* ===== Sudut lengkungan hijau (Background Glow Utama) ===== */}
          <Box
            position="absolute"
            inset="0"
            zIndex={-10}
            pointerEvents="none"
            userSelect="none"
          >
            <Image
              src={bgGlow}
              alt="Background Glow"
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "left bottom",
                width: "190%",
                maxWidth: "none",
                aspectRatio: "3 / 1",
                transform: "translateX(-30%) translateY(12%)",
              }}
            />
          </Box>

          {/* Konten Grid Utama (tidak berubah dari kode Anda sebelumnya) */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "minmax(0, 420px) minmax(0, 520px)",
            }}
            gap={{ base: 16, lg: 20, xl: 24 }}
            w="full"
            maxW={{ base: "xl", md: "3xl", lg: "6xl" }}
            mx="auto"
            px={{ base: 5, lg: 8 }}
            zIndex={1}
          >
            {/* ---------- Kolom Kiri ---------- */}
            <MotionBox
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <VStack
                align={{ base: "center", lg: "flex-start" }}
                spacing={6}
                textAlign={{ base: "center", lg: "left" }}
              >
                <Text
                  fontSize="xs"
                  px={4}
                  py={1.5}
                  rounded="full"
                  border="1px solid"
                  borderColor="#78FFA1"
                  color="#78FFA1"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  fontWeight="medium"
                >
                  How it works
                </Text>
                <Text
                  as="h2"
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  color="white"
                  lineHeight="tight"
                >
                  Scaling Made
                  <br />
                  Simple with AI
                </Text>
                {/* <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.300"
                  maxW={{ base: "full", md: "md" }}
                >
                  -
                </Text> */}
                <Button
                  as="a"
                  href={socialsLink.whitepaper}
                  target="_blank"
                  rel="noopener noreferrer"
                  bg="#78FFA1"
                  color="black"
                  fontWeight="semibold"
                  px={6}
                  h="48px"
                  rounded="full"
                  rightIcon={
                    <Box as="span" ml="2px">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2 7H12M8 2L13 7L8 12"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  }
                  _hover={{ bg: "#5FFF8F" }}
                  mt={2}
                >
                  Explore Now
                </Button>
              </VStack>
            </MotionBox>

            {/* ---------- Kolom Kanan (Kartu) ---------- */}
            <Flex direction="column" gap={{ base: 8, lg: 10 }}>
              {cardsData.map((card, index) => (
                <Box key={card.id} position="relative">
                  {index === 1 && card.customIcons && (
                    <VStack
                      spacing={4}
                      position="absolute"
                      left={{ base: "-55px", md: "-60px", lg: "-65px" }}
                      top="50%"
                      transform="translateY(-50%)"
                      zIndex={5}
                      display={{ base: "none", md: "flex" }}
                    >
                      {card.customIcons.map((iconDef) => (
                        <Circle
                          key={iconDef.id}
                          size={{ base: "36px", lg: "40px" }}
                          bg="#171F29"
                          borderWidth="1px"
                          borderColor="#283647"
                          color="gray.500"
                          _hover={{
                            color: "gray.400",
                            borderColor: "gray.500",
                          }}
                          transition="color 0.2s, border-color 0.2s"
                          cursor="pointer"
                        >
                          {iconDef.type === "tilde" && (
                            <TildeIcon
                              style={{ width: "18px", height: "auto" }}
                            />
                          )}
                          {iconDef.type === "refresh" && (
                            <RefreshCwAltIcon
                              style={{ width: "16px", height: "16px" }}
                            />
                          )}
                        </Circle>
                      ))}
                    </VStack>
                  )}

                  <MotionBox
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 18px 32px rgba(0,255,170,.14)",
                    }}
                    position="relative"
                    rounded="20px"
                    border="1px solid"
                    borderColor="#283647"
                    bg="rgba(14, 14, 14, 0.80)"
                    backdropFilter="blur(12px)"
                    p={{ base: 6, md: 8 }}
                    // minH={
                    //   index === 0 ? { base: "230px", md: "250px" } : undefined
                    // }
                    // h={index === 0 ? "full" : "auto"}
                    h="auto"
                  >
                    {/* {card.hasInternalGlow && index === 0 && (
                      <Box
                        position="absolute"
                        inset="0"
                        rounded="19px"
                        bg="radial-gradient(circle, #78FFA133 0%, transparent 70%)"
                        filter="blur(80px)"
                        opacity={0.8}
                        zIndex={-1}
                        pointerEvents="none"
                      />
                    )} */}
                    <Flex align="flex-start" gap={{ base: 4, md: 5 }}>
                      {card.hasPlaceholderIcon && (
                        <Box
                          bg="gray.700Alpha.400"
                          w={{ base: "80px", md: "100px" }}
                          h={{ base: "60px", md: "75px" }}
                          rounded="lg"
                          flexShrink={0}
                          borderWidth="1px"
                          borderColor="gray.600Alpha.500"
                        >
                          <Image
                            src={card.icon}
                            alt="web-workflow"
                            className="w-auto h-full m-auto"
                          />
                        </Box>
                      )}
                      <Box>
                        <Text
                          as="h3"
                          fontWeight="semibold"
                          fontSize={{ base: "lg", md: "xl" }}
                          color="white"
                          mb={2}
                        >
                          {" "}
                          {card.title}{" "}
                        </Text>
                        <Text fontSize="sm" color="gray.300">
                          {" "}
                          {card.desc}{" "}
                        </Text>
                      </Box>
                    </Flex>
                    {/* {index === 0 ? (
                      <Flex direction="column" justify="space-between" h="full">
                        <Box>
                          <Text
                            as="h3"
                            fontWeight="semibold"
                            fontSize={{ base: "xl", md: "2xl" }}
                            color="white"
                            mb={2.5}
                          >
                            {" "}
                            {card.title}{" "}
                          </Text>
                          <Text
                            fontSize="sm"
                            color="gray.300"
                            maxW={{ base: "90%", sm: "85%", md: "80%" }}
                          >
                            {" "}
                            {card.desc}{" "}
                          </Text>
                        </Box>
                        {card.showExploreMore && (
                          <Button
                            variant="ghost"
                            size="xs"
                            alignSelf="flex-end"
                            color="#78FFA1"
                            fontWeight="medium"
                            _hover={{ bg: "transparent", color: "white" }}
                            rightIcon={
                              <Box as="span" ml="4px">
                                {" "}
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  {" "}
                                  <path
                                    d="M2 7H12M8 2L13 7L8 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </svg>{" "}
                              </Box>
                            }
                            mt={3}
                          >
                            {" "}
                            Explore more{" "}
                          </Button>
                        )}
                      </Flex>
                    ) : (
                      <Flex align="flex-start" gap={{ base: 4, md: 5 }}>
                        {card.hasPlaceholderIcon && (
                          <Box
                            bg="gray.700Alpha.400"
                            w={{ base: "80px", md: "100px" }}
                            h={{ base: "60px", md: "75px" }}
                            rounded="lg"
                            flexShrink={0}
                            borderWidth="1px"
                            borderColor="gray.600Alpha.500"
                          >
                            <Image
                              src={IconWebWorkflow}
                              alt="web-workflow"
                              className="w-auto h-full m-auto"
                            />
                          </Box>
                        )}
                        <Box>
                          <Text
                            as="h3"
                            fontWeight="semibold"
                            fontSize={{ base: "lg", md: "xl" }}
                            color="white"
                            mb={2}
                          >
                            {" "}
                            {card.title}{" "}
                          </Text>
                          <Text fontSize="sm" color="gray.300">
                            {" "}
                            {card.desc}{" "}
                          </Text>
                        </Box>
                      </Flex>
                    )} */}
                  </MotionBox>
                </Box>
              ))}
            </Flex>
          </Grid>
        </Box>

        <div id="roadmap" className="h-[1em] lg:h-[5em] relative z-30" />

        <Box color="white" position="relative">
          <RoadmapStepper />
        </Box>

        {/* <div id="faq" className="h-[1em] lg:h-[5em] relative z-30" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "backOut" }} // Change the easing function here
          viewport={{ once: false, amount: 0.8 }}
        >
          <Flex
            id="investment"
            className="container-two w-full relative mx-auto"
            w="auto"
            h="auto"
            justifyContent="center" // Rata tengah horizontal
            alignItems="center" // Rata tengah vertikal
            // className="w-full max-w-screen-xl relative mx-auto"
            direction={{ base: "column" }}
            textAlign={{ base: "center", md: "left" }}
            align="center"
            // bg={"black"}
            justify="space-between"
            px={0}
            py={0}
            mx={{ base: "10" }}
            gap={0}
            zIndex={30}
          >
            <FAQSection />
          </Flex>
        </motion.div> */}

        <section
          id="scale"
          className="relative isolate overflow-hidden py-28 lg:py-40"
        >
          {/* Background Glow Bottom Right */}
          <Image
            src={bgGlow2}
            alt="background glow"
            priority
            className="absolute -z-10 right-[-10%] bottom-[-10%] w-[900px] h-auto object-contain"
          />

          <div className="mx-auto w-full max-w-[1240px] px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,580px)_minmax(0,420px)] gap-16 items-center">
            {/* Left Card */}
            <div className="relative flex flex-col gap-8 rounded-[28px] border border-[#2DFF95]/20 px-8 py-10">
              <div className="flex gap-4">
                {[IconFeature1, IconFeature2, IconFeature3].map((icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3DFF91]"
                  >
                    <Image src={icon} alt="icon" width={18} height={18} />
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[#78FFA1] text-sm font-medium mb-2">
                  Start Scaling Today
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
                  Ready to Scale <br className="hidden md:block" /> Smarter?
                </h2>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-6 items-start justify-start">
              <div className="rounded-[20px] border border-[#3DFF91]/20 p-4 md:p-6 w-full h-[240px] md:h-[280px]">
                {/* Placeholder for content/image */}
              </div>

              <Link href="#">
                <button className="mt-4 inline-flex items-center gap-2 bg-[#78FFA1] hover:bg-[#5FFF8F] text-black font-semibold px-6 py-3 rounded-full">
                  Get Started Now
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 7h10M7 2l5 5-5 5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }
};

export default Home;
