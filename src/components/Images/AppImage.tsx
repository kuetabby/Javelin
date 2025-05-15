import React from 'react';
import Image, { StaticImageData } from 'next/image';

type AppImageProps = {
    src: string | StaticImageData;
    alt: string;
    width?: string;
    height?: string;
    radius?: string;
    className?: string;
};

const AppImage: React.FC<AppImageProps> = ({ src, alt, width = 'auto', height = 'auto', radius = '0', className = '' }) => {
    return (
        <div className={`relative ${width} ${height} ${radius} ${className}`}>
            <Image src={src} alt={alt} layout="fill" objectFit="cover" className={`rounded-${radius}`} />
        </div>
    );
};

export default AppImage;