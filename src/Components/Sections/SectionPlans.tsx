import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ButtonLong } from "../Elements/Button";
import { BigCard } from "../Elements/Card";
import { Input } from "../Elements/Input";
import { Title } from "../Elements/Title";



export function SectionPlans() {

  return (
    <div>
      <section className="flex flex-col gap-6">
          <div className="flex flex-col items-center px-80 gap-12 text-center">
          <Title firstTitleBlack="Choose The" titleBlue="Best Plan" secondTitleBlack="That's For You"/>
          <div className="flex items-center gap-4" > Billed Monthly
          <button className="h-8 w-24 bg-[#039DAB] rounded-full ">
            <div className="h-6 w-7 bg-white rounded-full ml-1"></div>
            </button> Bill Annually
            </div>
            </div>
            <div className="flex justify-between">
              <BigCard 
              variant="green" 
              value="35"
              title="Standard" 
              text="All the basics for businesses that are just getting started." 
              input={<Input textOne="Unlimited updates" textTwo="Custom permissions" textThree="Custom designs & features" textFour="Custom hashtags" />} 
              button={<ButtonLong variant="whiteLong" text="Get Started"/>} />
              

             <BigCard 
             value="89"
             variant="blue" 
             title="Essentials" 
             text="All the basics for businesses that are just getting started." 
             input={<Input textOne="Unlimited updates" textTwo="Custom permissions" textThree="Custom instructors" textFour="Custom hashtags" />} 
             button={<ButtonLong variant="blackLong" text="Get Started"/>}/> 
              

             <BigCard 
             value="125"
             variant="pink" 
             title="Premium" 
             text="All the basics for businesses that are just getting started." 
             input={<Input textOne="Unlimited updates" textTwo="Custom permissions" textThree="Custom designs & features" textFour="Custom hashtags" />} 
             button={<ButtonLong variant="whiteLong" text="Get Started"/>}/>
              
            </div>
        </section>
    </div>
  )
}