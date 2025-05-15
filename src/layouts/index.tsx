"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Provider from "@/library/Provider";

import { kanit } from "@/utils/font";
// import AppBackground from "@/assets/bg-star.png";

import { useIsMounted } from "@/hooks/useIsMounted";

import "./style.css";

interface Props extends PropsWithChildren { }

const BaseLayout: React.FC<Props> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useIsMounted();
  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);

  return (
    <Provider>
      {isMounted && isLoaded && (
        <Navbar />
      )}
      <main className={clsx("base-main-container", kanit.className)}>
        {/* {isMounted && (
          <Image
            src={AppBackground}
            alt="roadmap"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
          />
        )} */}
        {children}
      </main>
      {isMounted && isLoaded && (
        <Footer />
      )}

    </Provider>
  );
};

export default BaseLayout;
