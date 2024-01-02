import Container from "../Container"
import Flex from "../Flex"
import List from "../List"
import Images from "../Images"
import Logo from "../../assets/logo.png"
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Menu = () => {
  return (

    <nav className="mt-6">
        <Container className="max-w-[1174px]">
            <Flex className="justify-between items-center pb-5">
                <div>
                  <Images src={Logo} className=" mt-3"/>
                </div>
                <ul>
                    <Flex className="mt-5">
                        <List href="#" text="Home" className="text-lg text-[#0A2C3D] font-bold font-Nunito hover:text-[#FF5A3C]"/>
                        <List href="#" text="Properties" className="text-lg text-[#0A2C3D] font-bold font-Nunito hover:text-[#FF5A3C] px-5"/>
                        <List href="#" text="Property" className="text-lg text-[#0A2C3D] font-bold font-Nunito hover:text-[#FF5A3C]"/>
                        <List href="#" text="Blog" className="text-lg text-[#0A2C3D] font-bold font-Nunito hover:text-[#FF5A3C] px-5"/>
                        <List href="#" text="Pages" className="text-lg text-[#0A2C3D] font-bold font-Nunito hover:text-[#FF5A3C]"/>
                        <List href="#" text="Contact" className="text-lg text-[#0A2C3D] font-bold font-Nunito hover:text-[#FF5A3C] px-5"/>
                    </Flex>
                </ul>
             <div>
             <Flex className='items-center text-xl gap-x-8'>
              <a href="#"><FaRegUser className="shadow-sm hover:text-red-500"/></a>
              <a href="#"><FaRegHeart className="hover:text-red-500"/></a>
              <a href="#"><IoSearch  className="text-2xl mt-1 hover:text-red-500"/></a>
              </Flex>
             </div>
            </Flex>
        </Container>
    </nav>
    
  )
}

export default Menu