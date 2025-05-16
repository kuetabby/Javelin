import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Circle,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { roadmapData, Step } from "../constants/roadmap";

const MotionBox = motion(Box);

const RoadmapStepper: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      color="white"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 12 }}
      position="relative"
      overflowX="hidden" // ✅ Prevent layout overflow
    >
      <Text
        textAlign="center"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        mb={{ base: 10, md: 14 }}
      >
        Our Roadmap
      </Text>

      {/* Center vertical line on desktop */}
      {!isMobile && (
        <Box
          position="absolute"
          top="180px"
          bottom="0"
          left="50%"
          w="2px"
          bgGradient="linear(to-b, #00FF7F, #008F5F)"
          transform="translateX(-50%)"
          zIndex={0}
        />
      )}

      {roadmapData.steps.map((step: Step, idx: number) => {
        const isLeft = idx % 2 === 0;

        return (
          <Box
            key={idx}
            w="full"
            mb={{ base: 10, md: 16 }}
            pl={isMobile ? 0 : isLeft ? 0 : "50%"}
            pr={isMobile ? 0 : isLeft ? "50%" : 0}
            overflow="hidden" // ✅ Contain animated box
          >
            <MotionBox
              initial={{ opacity: 0, x: isMobile ? 0 : isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Flex
                align="flex-start"
                justify={
                  isMobile ? "center" : isLeft ? "flex-end" : "flex-start"
                }
              >
                <Box
                  bg={step.active ? "#329e52" : "#262626"}
                  p={{ base: 5, md: 6 }}
                  borderRadius="2xl"
                  boxShadow="lg"
                  maxW="400px"
                  textAlign="left"
                  transition="transform 0.2s ease"
                  transform={
                    isMobile
                      ? "none"
                      : isLeft
                      ? "translateX(-12px)"
                      : "translateX(12px)"
                  }
                  _hover={{
                    transform: "scale(1.025)",
                  }}
                >
                  <HStack mb={4} spacing={4} align="center">
                    <Circle
                      size="10"
                      bg={step.active ? "#295b38" : "gray.700"}
                      borderWidth="2px"
                      borderColor={step.active ? "#78ffa1" : "#555"}
                      color={step.active ? "#78ffa1" : "#aaa"}
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      {idx + 1}
                    </Circle>
                    <Text
                      fontSize={{ base: "lg", md: "2xl" }}
                      fontWeight="bold"
                    >
                      {step.title}
                    </Text>
                  </HStack>
                  <VStack align="start" spacing={2} pl={6}>
                    {step.features.map((feature, i) => (
                      <Text key={i} fontSize="sm" lineHeight="tall">
                        – {feature.description.trim()}
                      </Text>
                    ))}
                  </VStack>
                </Box>
              </Flex>
            </MotionBox>
          </Box>
        );
      })}
    </Box>
  );
};

export default RoadmapStepper;
