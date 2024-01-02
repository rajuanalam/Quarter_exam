
import Button from '../Button'
import Container from "../Container"
import Flex from "../Flex"

import DotsShapes from '../../assets/dots_shapes.png'
import AboutImgOne from '../../assets/about_img_one.png'
import { FaCirclePlay } from "react-icons/fa6";

import Images from "../Images";
import Heading from "../Heading";
import AboutRec from "../../assets/aboutRec.png"
import Paragraph from "../Paragraph";
import AboutHome from '../../assets/aboutHome.png'
import QuateRec from '../../assets/quateRec.png'


const Marketplace = () => {
   
  return (

    <section className="bg-white pt-[280px] pb-[118px] ">
        <Container>
           
            <Flex className="justify-between items-center">
              <div className="w-1/2 relative mt-[-700px]">
                
                 <Images src={DotsShapes} className="absolute top-0 left-0 "/>
                
                
                 <Images src={AboutImgOne} className='absolute top-3 right-4 '/>
                 <div className="bg-[#B6B6C7] w-[330px] py-20 absolute top-[465px] left-0  rounded">
                 <FaCirclePlay className="text-[50px] ml-[130px] text-white bg-btn rounded-full"/>
                 </div>
                
              </div>
              <div className="w-1/2">
                
                <div className="">
                  <Images src={AboutRec} className=""/>
                  <Heading as='h5' text="About Us" className="text-btn text-base font-Nunito font-bold mt-[-28px] pl-[20px]"/>
                </div>
                <Heading as="h2" text="The Leading Real Estate Rental Marketplace" className="py-5 text-[44px] text-black font-Poppins font-bold"/>

                <Paragraph text="Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services" className="text-textColor text-base font-Nunito font-normal pr-[80px]"/>

                <Flex>
                  <div className='pt-8'>
                  <Flex >
                    <Images src={AboutHome}/>
                    <Paragraph text="Smart Home Design" className="text-textTwoColor text-base font-Nunito font-bold pt-3.5 pl-1"/>
                  </Flex>
                  </div>
                  <div className='pt-8 pl-2'>
                  <Flex >
                    <Images src={AboutHome}/>
                    <Paragraph text="Smart Home Design" className="text-textTwoColor text-base font-Nunito font-bold pt-3.5 pl-1"/>
                  </Flex>
                  </div>
                </Flex>
                <Flex>
                  <div className='pt-4'>
                  <Flex >
                    <Images src={AboutHome}/>
                    <Paragraph text="Smart Home Design" className="text-textTwoColor text-base font-Nunito font-bold pt-3.5 pl-1"/>
                  </Flex>
                  </div>
                  <div className='pt-4 pl-2'>
                  <Flex >
                    <Images src={AboutHome}/>
                    <Paragraph text="Smart Home Design" className="text-textTwoColor text-base font-Nunito font-bold pt-3.5 pl-1"/>
                  </Flex>
                  </div>
                </Flex>

                <div className="w-[506px]">
                  <Images src={QuateRec} className='py-8'/>
                  <Paragraph text='"Enimad minim veniam quis nostrud exercitation  llamco laboris. Lorem ipsum dolor sit amet"' className='mt-[-100px] pl-5 pr-[110px]'/>
                </div>
                <Button text="Know More" className="px-[50px] py-4 text-white text-sm font-Poppins  mt-[60px]"/>
              </div>

            </Flex>
           
           
        </Container>
        
    </section>
  )
}

export default Marketplace