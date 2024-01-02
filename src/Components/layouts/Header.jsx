import Container from '../Container'
import Paragraph from '../Paragraph'
import Flex from '../Flex'
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { SlSocialFacebook, SlSocialTumblr } from "react-icons/sl";
import { TfiVimeo } from "react-icons/tfi";
import Button from '../Button';

const Header = () => {
  return (

    <section className='bg-[#0A2C3D]'>
        <Container>
            <Flex className='items-center justify-between'>
                <Flex className='items-center justify-between'>
                    <CiLocationOn className='text-white mr-2'/>
                    <Paragraph text="254 Lillian Blvd, Holbrook" className="text-sm text-white font-normal font-Nunito border-r-2 pr-2 outline-offset-1"/>
                    <GoMail className='text-white ml-2 mr-2'/>
                    <Paragraph text="info@santizex-site.com" className="text-sm text-white font-normal font-Nunito "/>
                </Flex>
                <Flex className='items-center justify-between'>
                    <SlSocialFacebook className='text-white'/>
                     <SlSocialTumblr className='text-white'/>
                     <TfiVimeo className='text-white' />
                     <Button text="Add Listings" className="w-[137px] h-[48px] text-white text-sm font-Poppins ml-5"/>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Header