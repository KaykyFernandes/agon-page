import classNames from "classnames"

type ButtonProps = {
  variant?: 'default' | 'black' | 'transparent' | 'gray' | 'blackLong' | 'whiteLong'
  text: string
  icon?: any
}

export function Button({variant, text, icon}: ButtonProps) {
  let bgColor = ''
  if (variant === 'black') bgColor = 'bg-black text-white'
  if (variant === 'transparent') bgColor = 'border border-black'
  if (variant === 'gray') bgColor = 'bg-gray-200 transition border border-green focus:bg-white focus:border-blue focus:text-blue'
   return (
    <div>
      <button className={classNames("flex gap-2 items-center  w-auto px-6 h-11 rounded-3xl", bgColor)} >{text} {icon}</button>
    </div>
  )
}

export function ButtonLong({variant, text, icon}: ButtonProps) {
  let bgColor = ''
  if (variant === 'blackLong') bgColor = ' bg-[#333333] text-white'
  if (variant === 'whiteLong') bgColor = 'border-2 border-black'
  return (
    <div>
      <button className={classNames("flex gap-2 justify-center items-center w-64 h-11 rounded-md", bgColor)} >{text} {icon}</button>
    </div>
  )
}