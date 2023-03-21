type InputProps = {
  textOne: string
  textTwo: string
  textThree: string
  textFour: string
}

export function Input(props: InputProps) {
  return (
    <div className="flex flex-col  gap-2">
      <label>
      <input type="checkbox" className="h-4 w-4  accent-[#039DAB] " /> {props.textOne}
      </label>
      <label>
      <input type="checkbox" className="h-4 w-4  accent-[#039DAB] " /> {props.textTwo}
      </label>
      <label>
      <input type="checkbox" className="h-4 w-4  accent-[#039DAB] " /> {props.textThree}
      </label>
      <label>
      <input type="checkbox" className="h-4 w-4  accent-[#039DAB] " /> {props.textFour}
      </label>
    </div>
  )
}