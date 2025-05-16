import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// import Link from "next/link";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import useHash from "@/hooks/useHashname";

import { getHash } from "@/utils/hash";

import "./style.css";
import { socialsLink } from "@/constants/links";

interface Props {
  containterClass: string;
}

const PageTabs: React.FC<Props> = ({ containterClass }) => {
  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();

  const defaultHash = getHash();

  const tabsList = useMemo(() => {
    return [
      {
        href: "#features",
        pathname: `#features`,
        name: "Features",
      },
      {
        href: "#how-it-works",
        pathname: `#how-it-works`,
        name: "How It Works",
      },
      // {
      //   href: "#tokenomics",
      //   pathname: `#tokenomics`,
      //   name: "Tokenomics",
      // },
      {
        href: "#roadmap",
        pathname: `#roadmap`,
        name: "Roadmap",
      },
      {
        href: socialsLink.whitepaper,
        pathname: socialsLink.whitepaper,
        name: "Docs",
      },
      // {
      //   href: socialsLink.twitter,
      //   pathname: socialsLink.twitter,
      //   name: "Twitter",
      // },
    ];
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        // "w-64 lg:w-[42.5%] xl:w-2/5 justify-between items-center",
        "w-2/5 justify-between items-center",
        containterClass
      )}
    >
      {tabsList.map((item) => {
        // const isActive = !!defaultHash
        //   ? hashname === item.pathname
        //   : !defaultHash && pathname === item.pathname;

        return (
          <Anchor
            key={item.name}
            href={item.href}
            className={clsx(
              "nav-anchor hover:text-white"
              // "text-white p-2 hover:text-secondary font-bold",
              // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
              // isActive ? "nav-anchor-active" : "nav-anchor"
            )}
            style={{ transition: "250" }}
          >
            {item.name}
          </Anchor>
        );
      })}
    </div>
  );
};

export default PageTabs;
