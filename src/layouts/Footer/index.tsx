"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useIsMounted } from "@/hooks/useIsMounted";
import { socialsLink } from "@/constants/links";
import { CopyrightOutlined } from "@ant-design/icons";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { kanit } from "@/utils/font";
import SolnityLogo from "@/assets/solnity.png";

interface Props {}

const AppFooter: React.FC<Props> = () => {
  const abouts = [
    { name: "Twitter / X", url: socialsLink.twitter },
    { name: "Telegram", url: socialsLink.telegram },
    { name: "Documentation", url: socialsLink.whitepaper },
  ];

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!useIsMounted) return null;

  return (
    <footer className={`${kanit.className} bg-[#0B1E16] text-white pt-16 pb-10 px-6 lg:px-20`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Subscribe Card */}
        <div className="rounded-[20px] border border-[#3DFF91]/20 p-6 flex flex-col justify-between min-h-[240px] bg-[#12261E]">
          <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
          <div className="mt-auto border-t border-[#3DFF91]/30 pt-4 flex items-center justify-between">
            <input
              type="email"
              placeholder="you@email.com"
              className="bg-transparent text-sm outline-none placeholder:text-gray-400 w-full"
            />
            <button className="ml-3 text-[#78FFA1] hover:text-white transition">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm">
          <div>
            <h4 className="text-[#78FFA1] font-semibold text-xs mb-2">INFO</h4>
            {abouts.map((item, index) => (
              <Link key={index} href={item.url} target="_blank" className="block hover:text-[#78FFA1] mb-1">
                {item.name}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="text-[#78FFA1] font-semibold text-xs mb-2">ADDITIONAL LINK</h4>
            <p className="mb-1">Product Customization</p>
            <p className="mb-1">Community</p>
            <p>Corporate Responsibility</p>
          </div>
        </div>

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center justify-between gap-6 lg:items-end">
          <Image src={SolnityLogo} alt="Solnity Logo" className="w-[140px] object-contain" />
          <p className="text-xs text-gray-500 text-center lg:text-right">
            <CopyrightOutlined style={{ fontSize: "1em" }} /> Solnity 2025. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <div className="mt-10 flex justify-end">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="rounded-full border border-[#3DFF91] text-[#78FFA1] p-3 hover:bg-[#3DFF91]/10 transition"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default AppFooter;
