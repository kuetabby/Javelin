import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Collapse, List, ListItem } from "@chakra-ui/react";
// import { DollarOutlined, LineChartOutlined } from "@ant-design/icons";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import { getHash } from "@/utils/hash";
import useHash from "@/hooks/useHashname";

import { kanit } from "@/utils/font";

// import AppTitle from "@/assets/title-app.png";
// import { findUsLink, socialsLink } from "@/constants/links";

import "../style.css";
import "./style.css";
import { socialsLink } from "@/constants/links";
import { TeleIcon, TwitterIcon } from "@/utils/Icon/socials";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  // const btnRef = useRef() as any;

  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();

  const defaultHash = getHash();

  const tabsList = useMemo(() => {
    return [
      {
        href: "/",
        pathname: `/`,
        name: "Home",
      },
      {
        href: "#about",
        pathname: `#about`,
        name: "About",
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
        href: "#faq",
        pathname: `#faq`,
        name: "FAQ",
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
    <Collapse in={isOpen} animateOpacity>
      <div className={`w-full h-full mt-8 ${kanit.className}`}>
        <List spacing={3}>
          {tabsList.map((item) => {
            const isActive = !!defaultHash
              ? hashname === item.pathname
              : !defaultHash && pathname === item.pathname;

            return (
              <ListItem key={item.name} onClick={onClose}>
                <Anchor
                  href={item.href}
                  className={clsx(
                    "font-normal",
                    isActive ? "nav-anchor-active" : "nav-anchor"
                  )}
                  style={{ transition: "250" }}
                >
                  {item.name}
                </Anchor>
              </ListItem>
            );
          })}
          <ListItem onClick={onClose} className="md:hidden">
            <Anchor
              href={socialsLink.twitter}
              className={clsx(
                "font-normal nav-anchor"
                // isActive ? "nav-anchor-active" : "nav-anchor"
              )}
              style={{ transition: "250" }}
            >
              <TwitterIcon
                className="fill-white hover:fill-primary"
                style={{ fontSize: "1em" }}
              />{" "}
              Twitter / X
            </Anchor>
          </ListItem>
          <ListItem onClick={onClose} className="md:hidden">
            <Anchor
              href={socialsLink.telegram}
              className={clsx(
                "font-normal nav-anchor"
                // isActive ? "nav-anchor-active" : "nav-anchor"
              )}
              style={{ transition: "250" }}
            >
              <TeleIcon
                className="fill-white hover:fill-primary"
                style={{ fontSize: "1em" }}
              />{" "}
              Telegram
            </Anchor>
          </ListItem>
        </List>
      </div>
    </Collapse>
  );

  // return (
  //   <Drawer
  //     // size={""}
  //     isOpen={isOpen}
  //     placement="right"
  //     onClose={onClose}
  //     finalFocusRef={btnRef}
  //   >
  //     <DrawerOverlay />
  //     <DrawerContent>
  //       <DrawerCloseButton
  //         className="mt-2 font-extrabold text-red-500"
  //         style={{ fontSize: 20 }}
  //       />
  //       <DrawerHeader className={`bg-dark-main h-24 ${poppins.className}`}>
  //         <Link href="/" className={`logo-container text-white h-full`}>
  //           <div className="font-extrabold text-2xl">Cryptnative AI</div>
  //         </Link>
  //       </DrawerHeader>

  //       <DrawerBody className={`bg-dark-main ${poppins.className}`}>
  //         <List spacing={3}>
  //           {tabsList.map((item) => {
  //             const isActive = !!defaultHash
  //               ? hashname === item.pathname
  //               : !defaultHash && pathname === item.pathname;

  //             // if (item.pathname === "/whitepaper") {
  //             //   return (
  //             //     <ListItem key={item.name} onClick={onClose}>
  //             //       <Link
  //             //         key={item.name}
  //             //         href={item.href}
  //             //         target="_blank"
  //             //         rel="noopener noreferrer"
  //             //         className="nav-anchor"
  //             //       >
  //             //         {item.name}
  //             //       </Link>
  //             //     </ListItem>
  //             //   );
  //             // }

  //             return (
  //               <ListItem key={item.name} onClick={onClose}>
  //                 <Anchor
  //                   href={item.href}
  //                   className={clsx(
  //                     "font-bold",
  //                     // "text-white p-2 hover:text-secondary font-bold",
  //                     // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
  //                     // isActive ? "#bf00ff" : "text-white"
  //                     isActive ? "nav-anchor-active" : "nav-anchor"
  //                   )}
  //                   style={{ transition: "250" }}
  //                 >
  //                   {item.name}
  //                 </Anchor>
  //               </ListItem>
  //             );
  //           })}
  //         </List>
  //       </DrawerBody>

  //       <DrawerFooter className="bg-dark-main flex justify-center">
  //         <Link
  //           href={socialsLink.telegram}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="w-full"
  //         >
  //           <Button
  //             size={"lg"}
  //             className="w-full text-white bg-chr-primary hover:bg-chr-secondary active:bg-chr-secondary focus:bg-chr-secondary"
  //             // colorScheme="messenger"
  //             // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
  //           >
  //             Telegram
  //           </Button>
  //         </Link>
  //       </DrawerFooter>
  //     </DrawerContent>
  //   </Drawer>
  // );
};
