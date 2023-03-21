import { BsArrowRight } from 'react-icons/bs'
import Woman from '../../assets/woman.svg'
import { Button } from '../Elements/Button'

export function SectionStart() {
  return (
    <div>
       <section className="h-[43rem] bg-[#FAEDE3] flex">
          <div className="pt-40 pl-32 flex flex-col gap-6">
            <h1 className="text-6xl">We are <span className="text-blue">awesome team</span>  for your business dream</h1>
            <p className="opacity-50 text-xl">Integrated workflow designed for product teams.We <br /> create world-class development amd branding 
            </p> 
            <div className="flex gap-3">
              <Button variant='black' text='Get Started' icon={<BsArrowRight />} />
              <Button variant='transparent' text='Learn More' icon={<BsArrowRight />} />
            </div>
          </div>
          <img className="w-[40rem] pt-36" src={Woman} alt="" />
        </section>
    </div>
  )
}