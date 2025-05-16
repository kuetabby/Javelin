import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const faqDatas = [
  {
    question: "What is Javeline?",
    answer:
      "Javeline is a browser-based integrated development environment (IDE) built for Solana developers.",
  },
  {
    question: "Who can use Javeline?",
    answer:
      "Anyone! Javeline is designed for both beginners and experienced developers, supporting everything from quick experiments to production-grade contract deployments.",
  },
  {
    question: "Is Javeline optimized for Solana development?",
    answer:
      "Absolutely. Javeline provides native tools, libraries, and workflows tailored specifically to the Solana ecosystem for streamlined smart contract development.",
  },
  {
    question: "Is my code and data secure on Javeline?",
    answer:
      "Security is a top priority: we use end-to-end encryption in transit, secure cloud storage, and offer self-hosted deployment options for enterprise needs.",
  },
];

const MotionBox = motion(Box);

const FAQSection: React.FC = () => {
  const columns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Box py={{ base: 12, md: 24 }} px={{ base: 6, md: 16 }}>
      <Heading
        as="h2"
        size={useBreakpointValue({ base: "2xl", md: "4xl" })}
        textAlign="center"
        mb={8}
      >
        Common Questions
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns={`repeat(${columns}, 1fr)`}
        gap={{ base: 4, md: 8 }}
      >
        {faqDatas.map((faq, idx) => (
          <MotionBox
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: false }}
            bg="#474747"
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
          >
            <Accordion allowToggle>
              <AccordionItem border="none">
                <AccordionButton
                  _expanded={{ bg: "#008F5F", color: "white" }}
                  _hover={{ bg: "#004F2F", color: "white" }}
                  px={4}
                  py={3}
                >
                  <Text flex="1" textAlign="left" fontWeight="semibold">
                    {faq.question}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  bg="#474747"
                  color="gray.200"
                  px={4}
                  py={3}
                  fontSize="sm"
                >
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
