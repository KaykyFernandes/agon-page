type ColorProps = {
  variant?: string
  element: any
}

export function ColorOrange(props: ColorProps) {
  
  return (
    <div className="">
      {props.element}
    </div>
  )
}

export function ColorBlue(props: ColorProps) {
  return (
    <div className=" w-[21rem] rounded-xl">
      {props.element}
    </div>
  )
}

export function ColorGreen(props: ColorProps) {
  return (
    <div className=" rounded-xl">
      {props.element}
    </div>
  )
}

export function ColorPink(props: ColorProps) {
  return (
    <div className="bg-[#FBDDE8] w-[21rem] rounded-xl">
      {props.element}
    </div>
  )
}

export function ColorWhite(props: ColorProps) {
  return (
    <div className="">
      {props.element}
    </div>
  )
}