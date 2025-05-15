import React from "react";
import { kanit } from "@/utils/font";
import Image from "next/image";
import "./style.css";
import loadingGif from "@/assets/loader.gif"

interface Props { }

const YinLoader: React.FC<Props> = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center mx-auto overflow-hidden ${kanit.className}`}
    >
      {/* <div className="w-full h-28 flex items-center justify-center">
        <div className="loader" />
      </div> */}
      <div className="w-full h-28 flex items-center justify-center">
        <Image
          src={loadingGif}
          alt="Loading"
          className="gif-loader"
          layout="intrinsic" // Adjust layout if needed
          width={20} // Adjust width as necessary
          height={20} // Adjust height as necessary
        />
      </div>
    </div>
  );
};

export default YinLoader;