import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import SideMenu from "./SideBar";

const MobileNavbar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" >
      <DrawerOverlay />
      <DrawerContent pt="10px">
        <DrawerCloseButton />
        <SideMenu />
      </DrawerContent>
    </Drawer>
  );
};

export default function Header() {

  const {
    isOpen: isMobileNavOpen,
    onOpen: onMobileNavOpen,
    onClose: onMobileNavClose,
  } = useDisclosure();
  
  return (
    <Box
      flex="0 0 72px"
      bg="#FFFFFF"
      pl="16px"
      pr="16px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.15)"
    >
      <MobileNavbar isOpen={isMobileNavOpen} onClose={onMobileNavClose} />
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW="1600px"
        mx="auto"
      >
        <IconButton
            display={["block", null, "none"]}
            aria-label="menu"
            icon={<HamburgerIcon />}
            onClick={onMobileNavOpen}
          />
        <Link href={"/"}>
          <Image
            src="/images/logo2.png"
            alt="logo"
            width="220px"
            height="26px"
            pl={6}
          />
        </Link>
        <Menu>
            <MenuButton rounded={"full"}>
              <Avatar
                height="36px"
                width="36px"
                name={"User"}
                // src={{}}
              />
            </MenuButton>
            <MenuList>
              <MenuItem >
                My Profile
              </MenuItem>
              <MenuItem >
                Change Password
              </MenuItem>
              <MenuItem >
                Log Out
              </MenuItem>
            </MenuList>
          </Menu>
      </Flex>
    </Box>
  );
}
