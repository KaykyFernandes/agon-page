import Person from '../../assets/Mask-group.svg' 
import { CardClient } from '../Elements/Card'
import { TextGray } from '../Elements/TextGray'
import { Title } from '../Elements/Title'

export function SectionClients() {
  return (
    <div>
      <section className="flex flex-col gap-6">
        <Title firstTitleBlack="Our Happy" titleBlue="Customers"/>
          <TextGray text="Know about our clients, we are a woldwide corporate brand"/>
          <div className="flex gap-7">
            <CardClient icon={Person} variant='green' title='Wade Warren'  />
            
            <CardClient icon={Person} variant='blue' title='Albert Florise'  />
            
            <CardClient icon={Person} variant='pink' title='Jenny Wilson'  /> </div>
        </section>
    </div>
  )
}