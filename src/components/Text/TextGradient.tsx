import React, { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

interface TextGradientProps {
    children: ReactNode;
    fontSize?: string | string[];
    fontWeight?: string;
    gradient?: string;
}

const TextGradient: React.FC<TextGradientProps> = ({ children, fontSize, fontWeight, gradient }) => {
    return (
        <Text
            bgClip="text"
            bgGradient={gradient || 'linear(to-r, #d8b4fe, #818cf8, #38bdf8, #34d399)'}
            fontSize={fontSize || 'inherit'}
            fontWeight={fontWeight || 'bold'}
        >
            {children}
        </Text>
    );
};

export default TextGradient;