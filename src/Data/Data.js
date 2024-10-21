// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,

} from "@iconscout/react-unicons";


// Recent Card Imports
import img1 from "../imgs/img1.png";


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Employees",
    
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    
    value: "250",
    
    series: [
      {
        name: "Available Position",
        data: [3, 10, 18, 2, 4, 10, 25],
      },
    ],
  },
  {
    title: "Talent Request",
    
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },

    value: "16",
    
    series: [
      {
        name: "Revenue",
        data: [10, 1, 5, 7, 8, 3, 40],
      },
    ],
  },
 
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "YOU POSTED A NEW JOB",
    noti: "Kindly check the Requirements and terms of work and make sure every thing is right ",
    time: "10.40 AM, Fri Sept 2021",
  },
]
