import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Images from '../Images'
import Paragraph from '../Paragraph'
import House from '../icons/House'
import Play from '../../assets/paly.png'
import White from '../../assets/w_arrow.png'
import Pink from '../../assets/p_arrow.png'
import Shape from '../../assets/shape.png'








import { FaAngleDown } from "react-icons/fa6";

import List from "../List";
import { useRef } from 'react'
import Bar from "../icons/Bar";



const Banner = () => {
  let dropOneRef = useRef(0);

  let handleDropOne = () => {

    if (dropOneRef.current.style.display == "block") {
      dropOneRef.current.style.display = "none"
    
    }
    else{
      dropOneRef.current.style.display = "block"
    }
  };

  let dropTwoRef = useRef(0);

  let handleDropTwo = () => {

    if (dropTwoRef.current.style.display == "block") {
      dropTwoRef.current.style.display = "none"
    
    }
    else{
      dropTwoRef.current.style.display = "block"
    }
  };

  let dropThreeRef = useRef(0);

  let handleDropThree = () => {

    if (dropThreeRef.current.style.display == "block") {
      dropThreeRef.current.style.display = "none"
    
    }
    else{
      dropThreeRef.current.style.display = "block"
    }
  };
 
  return (

    <section className='bg-[#F2F6F7] '>
        <div className='relative'>
        <Images src={White} className="absolute top-[400px] left-10"/>
        <Images src={Pink} className="absolute top-[400px] right-10"/>
        <Images src={Shape}  className='absolute top-32 left-0'/>
        </div>
        <Container className="max-w-[1174px] py-64">
            <Flex>
               <House/>
               <Paragraph text="Real Estate Agency" className="text-base font-Nunito pl-2"/>
            </Flex>
            <Heading text="#Find Your Dream# House By Us" as="h1" className="font-Poppins text-6xl font-bold w-1/2 pt-6"/>
            <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing" className="text-base font-Nunito text-[#5C727D] w-[366px] pt-6"/>
            <Flex className="items-center">
               <Button text="View Properties" className="w-[137px] h-[48px] text-white text-sm font-Poppins"/>
               <Images src={Play} className=""/>
            </Flex>



            <div className="bg-white max-w-container pt-12 pb-10 pl-[30px] pr-[24px]  rounded-[5px] shadow-md absolute -bottom-16">
            <Flex className="justify-between items-center">
                <div className="relative w-[266px] mr-8">
                <div className="border-[#CECED7] border items-center  py-3.5 px-3 rounded-sm">
                    <Flex className="items-center">
                    <Paragraph text="Choose Area" className="w-[266px] text-sm text-[#5C5B7B] font-bold font-Nunito pr-[80px]"/>
                    <FaAngleDown onClick={handleDropOne} className="text-red-600 cursor-pointer"/>
                    </Flex>
                </div>
                <div ref={dropOneRef} className="absolute top-[49px] left-0 hidden  w-[266px]   bg-btn border rounded">
                     <ul className="">
                        <List href="#" text='Dhaka' className='py-1 pl-1 hover:font-bold block hover:bg-black hover:text-white'/>
                        <List href="#" text='Sylhet' className='py-1 pl-1 hover:font-bold block hover:bg-black hover:text-white'/>
                        <List href="#" text='Mymensingh' className='py-1 pl-1 hover:font-bold block hover:bg-black hover:text-white'/>
                     </ul>
                    </div>
                </div>
                <div className="relative w-[266px] mr-8">
                <div  className="border-[#CECED7] border items-center  py-3.5 px-3 rounded-sm">
                    <Flex className="items-center">
                    <Paragraph text="Choose Area" className="w-[266px] text-sm text-[#5C5B7B] font-bold font-Nunito pr-[80px]"/>
                    <FaAngleDown  onClick={handleDropTwo} className="text-red-600 cursor-pointer"/>
                    </Flex>
                </div>
                <div ref={dropTwoRef} className="absolute top-[49px] left-0 hidden  w-[266px] bg-btn border rounded">
                     <ul className="">
                        <List href="#" text='Dhaka' className='py-1 pl-1 hover:font-bold block hover:bg-black hover:text-white'/>
                        <List href="#" text='Sylhet' className='py-1 pl-1 hover:font-bold block hover:bg-black hover:text-white '/>
                        <List href="#" text='Mymensingh' className='py-1 pl-1 hover:font-bold block hover:bg-black hover:text-white'/>
                     </ul>
                    </div>
                </div>
                <div className="relative w-[266px] mr-8">
                <div  className="border-[#CECED7] border items-center  py-3.5 px-3 rounded-sm">
                    <Flex className="items-center">
                    <Paragraph text="Choose Area" className="w-[266px] text-sm text-[#5C5B7B] font-bold font-Nunito pr-[80px]"/>
                    <FaAngleDown onClick={handleDropThree}  className="text-red-600 cursor-pointer"/>
                    </Flex>
                </div>
                <div ref={dropThreeRef} className="absolute top-[49px] left-0 hidden  w-[266px]   bg-btn border rounded">
                     <ul className="">
                        <List href="#" text='Dhaka' className='py-1 pl-1 hover:font-bold block hover:bg-black hover:text-white'/>
                        <List href="#" text='Sylhet' className='py-1 pl-1 hover:font-bold block hover:bg-black hover:text-white '/>
                        <List href="#" text='Mymensingh' className='py-1 pl-1 hover:font-bold block hover:bg-black hover:text-white'/>
                     </ul>
                    </div>
                </div>

                <Bar />

                <Button text="FIND NOW" className="px-[50px] py-4 text-white text-sm font-Poppins ml-8"/>
               
            </Flex>
            </div>
        </Container>
        
    </section>
  )
}

export default Banner