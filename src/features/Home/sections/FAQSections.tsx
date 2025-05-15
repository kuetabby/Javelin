import React from "react";
import { Box, Flex, Text, useDisclosure, Collapse } from "@chakra-ui/react";
import { RightOutlined, DownOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const faqDatas = [
  {
    question: "What is Solvra?",
    answer:
      "Solvra is a browser-based integrated development environment (IDE) built for Solana developers.",
  },
  {
    question: "Who can use Solvra?",
    answer:
      "Anyone! Solvra is designed for both beginners and experienced developers. Whether you're experimenting or shipping production-grade contracts, Solvra is your go-to platform.",
  },
  {
    question: "Is Solvra optimized for Solana development?",
    answer:
      "Yes! Solvra is tailor-made for Solana smart contracts, giving you direct access to the tools, libraries, and workflows that fit the Solana ecosystem.",
  },
  {
    question: "Is my code and data secure on Solvra?",
    answer:
      "We take security seriously. Solvra uses encrypted communication and secure cloud storage practices. We’ll also offer self-hosted options for teams needing full control.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      mb={8}
      borderRadius="xl"
      bgGradient="linear(to-r, #59D279, #91FFAE)"
      p="1px"
    >
      <Box
        bg="black"
        p={4}
        borderRadius="xl"
        _hover={{
          boxShadow:
            "0 0 20px 5px rgba(89, 210, 121, 0.5), 0 0 20px 5px rgba(145, 255, 174, 0.5)",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <Flex
          align="center"
          justify="space-between"
          onClick={onToggle}
          cursor="pointer"
        >
          <Text color="white">{question}</Text>
          <Box as="span" color="white">
            {isOpen ? <DownOutlined /> : <RightOutlined />}
          </Box>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box mt={4} pl={8} color="whiteAlpha.800">
            {answer}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

const FAQSection = () => {
  return (
    <Box py={10}>
      <Text
        fontSize={{ base: "4xl", lg: "6xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={8}
        color="white"
      >
        FAQ
      </Text>
      <Box maxW="800px" w={{ lg: "1000px" }} mx="auto" px={4}>
        {faqDatas.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: index * 0.15 }} // Smoother animation
            viewport={{ once: false, amount: 0.8 }}
          >
            <FAQItem question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
