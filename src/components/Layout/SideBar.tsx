import { Box, VStack, Text, HStack, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const menuList: {
  activeImage: string;
  menuImage: string;
  menuItem: string;
  url: string;
}[] = [
  {
    activeImage: "/images/NavbarImages/selectedDashboard.svg",
    menuImage: "/images/NavbarImages/dashboard.svg",
    menuItem: "Dashboard",
    url: '/'
  },
  {
    activeImage: "/images/NavbarImages/selectedManageUser.svg",
    menuImage: "/images/NavbarImages/manageUser.svg",
    menuItem: "Delivery Planner & Schedule",
    url: '/deliveryplanner'
   
  },
  {
    activeImage: "/images/NavbarImages/selectedAssignCourse.svg",
    menuImage: "/images/NavbarImages/assignCourse.svg",
    menuItem: "Student Attendance",
    url:"/hghgh"
  },
  {
    activeImage: "/images/NavbarImages/selectedCourseCatalog.svg",
    menuImage: "/images/NavbarImages/courseCatalog.svg",
    menuItem: "Trainer CRM",
    url:"/hghgh"
  
  },
  {
    activeImage: "/images/NavbarImages/selectedReports.svg",
    menuImage: "/images/NavbarImages/reports.svg",
    menuItem: "Reports",
    url:"/hghgh"
  },
];
export const MenuItem = ({
  menu,
  isActive,
  onHover,
  onHoverOut,
}: {
  menu: {
    activeImage: string;
    menuImage: string;
    menuItem: string;
    url: string;
  };
  isActive: boolean;
  onHover: () => void;
  onHoverOut: () => void;
}) => {
  return (
    <Link href={menu.url} passHref>
      <Box
        w="280px"
        bg={isActive ? "rgba(0, 112, 210, 0.1)" : "transparent"}
        h="40px"
        padding="10px 0px 10px 16px"
        lineHeight={"20px"}
        fontSize="14px"
        color={isActive ? "#0070D2" : "#0A1931"}
        fontWeight={isActive ? "bold" : "400"}
        borderLeft={isActive ? "8px solid #0070D2" : "8px solid transparent"}
        _hover={{
          color: "#0070D2",
          background: "rgba(0, 112, 210, 0.1)",
        }}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
      >
        <HStack>
          <Text>{menu.menuItem}</Text>
        </HStack>
      </Box>
    </Link>
  );
};

const SideMenu = () => {
  const router = useRouter();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <VStack pt="24px" borderRight="1px solid #DCDDDE" h="100%" spacing={2}>
      {menuList.map((item, index) => (
        <MenuItem
          menu={item}
          key={index}
          isActive={item.url === router.pathname}
          onHover={() => setHoverIndex(index)}
          onHoverOut={() => setHoverIndex(null)}
        />
      ))}
    </VStack>
  );
};
export default SideMenu;
