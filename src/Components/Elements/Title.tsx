type TitleProps = {
  firstTitleBlack: string
  secondTitleBlack?: string
  titleBlue?: string
}

export function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="text-4xl">{props.firstTitleBlack} <span className="text-blue">{props.titleBlue}</span> {props.secondTitleBlack}</h1>
    </div>
  )
}