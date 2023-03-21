import { CardProposals } from "../Elements/Card"
import { TextGray } from "../Elements/TextGray"
import { Title } from "../Elements/Title"

export function SectionProposals() {
  return (
    <section className="flex flex-col justify-center gap-20 bg-orange h-[35rem]">
          <div className="flex flex-col items-center text-center gap-5 px-80">
          <Title firstTitleBlack="What We" titleBlue="Offer"/>
          <TextGray text='What makes us different from others? We give holistic solutions with strategy, design & technology.' />
          </div>
          <div className="flex justify-around">
          <CardProposals title="Stratrgic Consulting" text="One make creepeth, man bearing theing firmament" />
          
          <CardProposals title="Cognitive Solution" text="One make creepeth, man bearing theing firmament" />
          
          <CardProposals title="Market research" text="One make creepeth, man bearing theing firmament" />
          </div>
        </section>
  )
}