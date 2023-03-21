type TextProps = {
  text: string
}

export function TextGray({text}: TextProps) {
  return (
    <div>
      <p className="text-[#6D7589]">{text}</p>
    </div>
  )
} 