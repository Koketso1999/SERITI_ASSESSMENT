import { IoIosSpeedometer,IoDocumentText,IoMdSchool,IoDocumentsOutline } from "react-icons/io";
import { FaLaptop, FaChartPie, FaEdit, FaUsers,FaStar,FaRegThumbsUp} from "react-icons/fa";
import { MdTableRows} from "react-icons/md";
import { HiDocumentAdd, HiDocumentText} from "react-icons/hi";


export const SideBarLinkObjects = [ 
    
    {
        icon: <IoIosSpeedometer />,
        link:'Dashboard',
        rightlink:''
},
    
    {
        icon: <FaLaptop />,
        link:'UI Elements',
        rightlink:''
},
    
    {
        icon: <FaChartPie />,
        link:'Charts',
        rightlink:''
},
    
    {
        icon: <FaEdit />,
        link:'Forms',
        rightlink:''
},
    
    {
        icon: <MdTableRows />,
        link:'Tables',
        rightlink:''
},
    
    {
        icon: <HiDocumentText />,
        link:'Pages',
        rightlink:''
},
    
    {
        icon: <HiDocumentAdd />,
        link:'Docs',
        rightlink:''
}
    
]

export const CategoriesObjects = [ 
    
    {
        icon: <IoIosSpeedometer />,
        category:'Users',
        number:5
},
    
    {
        icon: <FaRegThumbsUp />,
        category:'Likes',
        number:25
},
    
    {
        icon: <FaUsers />,
        category:'Uploads',
        number:5
},
    
    {
        icon: <FaStar />,
        category:'Stars',
        number:5
},

]
    