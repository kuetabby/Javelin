// components/Chip.tsx
import iconCheck from "@/assets/check_icon.png"
import React from 'react';
import AppImage from '../Images/AppImage';

type ChipProps = {
    text: string;
    className?: string;
};

const Chip: React.FC<ChipProps> = ({ text, className }) => {
    return (
        <div className={`inline-flex items-center px-4 py-2 bg-black text-white rounded-full border-[1px] ${className} border-[#3854FE]`}>
            {/* <svg className="w-4 h-4 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                    clipRule="evenodd"
                />
            </svg> */}
            <AppImage
                src={iconCheck}
                alt={"Investment Feature"}
                width=" w-[10px] lg:w-6"
                height=" h-[10px] lg:h-6"
                radius="rounded-lg"
                className="relative mr-2 text-sm"
            />
            {text}
        </div>
    );
};

export default Chip;