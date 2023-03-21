import { Card } from "../Elements/Card"
import { TextGray } from "../Elements/TextGray"
import { Title } from "../Elements/Title"

export function SectionCards() {
  return (
    <>
    <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 items-center px-80 text-center">
          <Title firstTitleBlack="We facilitate the" titleBlue="creation" secondTitleBlack="of strategy and design"/>
          <TextGray text="Interactively transform magnetic growth strategies whereas prospective “outside the box” thinking." />
          </div>
          <div className="flex justify-between">
          <Card 
          variant="blue" 
          title="Business trategy" 
          text="You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe."/>

          <Card 
          variant="green" 
          title="Local Marketing" 
          text="You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe."/>
          
          <Card 
          variant="orange" 
          title="Social Media" 
          text="You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe."/>
          </div>
        </section>
    </>
  )
}