import classNames from "classnames"

import { Button } from "./Button"
import { TextGray } from "./TextGray";
import { Input } from "./Input";

import { BsArrowRight } from "react-icons/bs";

type CardProps = {
  variant?: 'default' | 'orange' | 'green' | 'blue' | 'pink' | 'white'
  value?: string
  title: string
  text?: string
  button?: any
  input?: any
  icon?: any
}

export function Card({variant, title, text, icon}: CardProps) {
  let bgColor = ''

  if (variant === 'orange') bgColor = 'bg-orange w-[21rem]'
  if (variant === 'blue') bgColor = 'bg-[#D1ECFD] w-[21rem]'
  if (variant === 'green') bgColor = 'bg-[#DBECE5] w-[21rem]'

  return (
    <div className={classNames("flex flex-col gap-4 px-10 py-8 h-auto  rounded-xl", bgColor)}>
      {icon}
      <h2 className="text-3xl">{title}</h2>
      <p className="text-gray-600">{text}</p>
      
      <Button variant="transparent" text="Learn More" icon={<BsArrowRight />} />
    </div>
  )
}

export function CardProposals({text, title, icon}: CardProps) {
  return (
    <div className="flex flex-col gap-2 bg-white w-72 px-10 py-8 rounded-xl">
      {icon}
      <h2 className="text-xl ">{title}</h2> 
      <p className="text-gray-600">{text}</p>
    </div>
  )
}

export function CardClient({title, icon, variant}: CardProps) {
  let bgColor = ''

  if (variant === 'green') bgColor = 'border-[#DBECE5]'
  if (variant === 'blue') bgColor = 'border-[#D1ECFD]'
  if (variant === 'pink') bgColor = 'border-[#FAD2E1]'

  return (
    <div className={classNames('flex flex-col border-[12px] gap-4 justify-center px-4 h-[21rem] rounded-sm', bgColor)}>
      <img className="bg-orange w-20 rounded-full" src={icon} alt="" />
      <h2 className="text-3xl"> {title} </h2>
      <TextGray text="Necessary to deliver white glove,fully managed campaigns that surpass industry benchmarks.Take your career to next level." />
    </div>
  )
}

export function BigCard({variant, value, title, text, button, input}: CardProps) {

  let bgColor = ''

  if (variant === 'pink') bgColor = 'bg-[#FBDDE8] w-[21rem]'
  if (variant === 'blue') bgColor = 'bg-[#D1ECFD] w-[21rem]'
  if (variant === 'green') bgColor = 'bg-[#DBECE5] w-[21rem]'

  return (
    <div className={classNames("flex flex-col gap-4 px-10 py-8 h-auto  rounded-xl", bgColor)}>
      
      <h1 className="text-4xl font-bold">${value} <span className="text-[#7B7C7D] text-lg">/month</span></h1>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-[#6D7589]">{text}</p>
      <div className="border border-[#686868] mt-5"></div>
      {input}
      {button}
    </div>
  )
}