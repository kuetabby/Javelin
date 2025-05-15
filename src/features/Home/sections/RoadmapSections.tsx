import React from 'react';
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { roadmapData, Phase, Step } from '../constants/roadmap'; // Adjust the import path as needed
import TextGradient from '@/components/Text/TextGradient';
import { motion } from 'framer-motion';

const RoadmapStepper: React.FC = () => {
    return (
        <Box color="white" py={10} px={4}>
            <Flex direction="column" align="center" w="full" maxW="1200px" mx="auto">
                <PhaseSection phase={roadmapData} />
            </Flex>
        </Box>
    );
};

interface PhaseSectionProps {
    phase: Phase;
}

const PhaseSection: React.FC<PhaseSectionProps> = ({ phase }) => {
    return (
        <>
            <Flex direction="column" w="full" position="relative" align="center">
                <Text className='mb-16' fontSize={{ base: "4xl", lg: "6xl" }} fontWeight="bold">ROADMAP</Text>
                {phase.steps.map((step, stepIndex) => (
                    <motion.div
                        key={stepIndex}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut', delay: stepIndex * 0.2 }}
                        viewport={{ once: false, amount: 0.8 }}
                        className="w-full"
                    >
                        <Flex
                            key={stepIndex}
                            direction={{ base: "column", md: "row" }}
                            align={{ base: "center", md: "start" }}
                            position="relative"
                            zIndex={1}
                            px={{ base: 4, md: 8 }}
                            py={{ base: 10, md: 0 }}
                            w="full"
                            justify="start"
                            maxW="1200px"
                            gap={4}
                        >
                            <StepperIndicator step={stepIndex + 1} />
                            <StepperStep step={step} />
                        </Flex>
                    </motion.div>
                ))}
            </Flex>
        </>
    );
};

interface StepperStepProps {
    step: Step;
}

const StepperStep: React.FC<StepperStepProps> = ({ step }) => {
    var isFeaturesEmpty = step.features.length == 0;
    return (
        <Box
            flex={{ base: 1, md: 1 }}
            ml={{ base: 0, md: 8 }}
            textAlign={{ base: "center", md: "left" }}
            maxW="600px"
        >
            <Text fontSize="2xl" fontWeight="bold">{step.title}</Text>
            {/* <Text className='text-gray-500' fontSize="md" mt={2}><strong>Purpose:</strong> {step.purpose}</Text> */}
            {step.features && step.features.length > 0 && (
                <>
                    {/* <Text fontSize="md" mt={2}><strong>Features:</strong></Text> */}
                    <Box pl={4} mt={1}>
                        {step.features.map((feature, index) => (
                            <Text className='text-gray-500' key={index} fontSize="md">• {feature.description}</Text>
                        ))}
                    </Box>
                </>
            )}

        </Box>
    );
};

interface StepperIndicatorProps {
    step: number;
}

const StepperIndicator: React.FC<StepperIndicatorProps> = ({ step }) => {
    const stepItem = roadmapData.steps[step - 1];
    const isActive = stepItem.active;
    const subtitle = stepItem.subtitle;
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex className={`relative ${isActive ? "left-0" : ""}`} direction="row" align="center" minW={{ base: "100%", md: "200px" }} display={{ base: 'none', md: 'flex' }}>
            <Flex direction="column" align="center" mr={6}>
                <Box textAlign="right" mb={8} w="165px">
                    {isActive ? (
                        <>
                            <TextGradient fontSize="xl" fontWeight="bold" gradient="linear(to-r, #59D279, #91FFAE)">
                                {`Phase ${step}`}
                            </TextGradient>
                            {/* <Text fontSize="xl">{subtitle}</Text> */}
                        </>
                    ) : (
                        <Box w="165px" />
                    )}
                </Box>
            </Flex>

            <Flex direction="column" align="center" ml={{ md: isActive ? 1 : 0, xs: isActive ? 1 : 0 }}>
                <Box
                    w="28px"
                    h="28px"
                    borderRadius="lg"
                    bg={isActive ? `linear-gradient(to right, #59D279, #91FFAE)` : `gray`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    zIndex={2}
                >
                    <Text fontSize="sm" fontWeight="bold" color="white">{step}</Text>
                </Box>
                <Box
                    w="5px"
                    h="300px"
                    bg={step == roadmapData.steps.length ? '' : isActive ? `linear-gradient(to right, #59D279, #91FFAE)` : `gray`}
                />
            </Flex>
        </Flex>
    );
};

export default RoadmapStepper;