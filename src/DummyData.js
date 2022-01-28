import {
  IoIosSpeedometer
} from "react-icons/io";
import {
  FaLaptop,
  FaChartPie,
  FaEdit,
  
  FaAngleRight,
} from "react-icons/fa";
import { MdTableRows } from "react-icons/md";
import { HiDocumentAdd, HiDocumentText } from "react-icons/hi";

// List of Items used in the side Navigation
export const SideBarLinkObjects = [
  {
    icon: <IoIosSpeedometer />,
    link: "Dashboard",
    rightlink: "",
  },

  {
    icon: <FaLaptop />,
    link: "UI Elements",
    rightlink: <FaAngleRight />,
  },

  {
    icon: <FaChartPie />,
    link: "Charts",
    rightlink: "",
  },

  {
    icon: <FaEdit />,
    link: "Forms",
    rightlink: <FaAngleRight />,
  },

  {
    icon: <MdTableRows />,
    link: "Tables",
    rightlink: <FaAngleRight />,
  },

  {
    icon: <HiDocumentText />,
    link: "Pages",
    rightlink: <FaAngleRight />,
  },

  {
    icon: <HiDocumentAdd />,
    link: "Docs",
    rightlink: "",
  },
];

// List of Data used to Come up with the Line Chart
export const data = [
  {
    name: "January",
    uv: 29,
    pv: 65,
    amt: 2400,
  },
  {
    name: "February",
    uv: 49,
    pv: 60,
    amt: 2210,
  },
  {
    name: "March",
    uv: 40,
    pv: 80,
    amt: 2290,
  },
  {
    name: "April",
    uv: 20,
    pv: 82,
    amt: 2000,
  },
  {
    name: "May",
    uv: 56,
    pv: 87,
    amt: 2181,
  },
];

// List of Data used to Come up with the Pie Chart
export const Piedata = [
  { name: "Group A", value: 80 },
  { name: "Group B", value: 400 },
];

export const Stackdata = [
  {
    name: "January",
    uv: 29,
    pv: 65,
  },
  {
    name: "February",
    uv: 49,
    pv: 60,
  },
  {
    name: "March",
    uv: 40,
    pv: 80,
  },
  {
    name: "April",
    uv: 20,
    pv: 82,
  },
  {
    name: "May",
    uv: 56,
    pv: 87,
  },
];
