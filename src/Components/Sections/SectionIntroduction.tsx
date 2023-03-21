import GroupOffice from '../../assets/group-coworkers-office-talking.png'
import { Button } from '../Elements/Button'
import { TextGray } from '../Elements/TextGray'
import { Title } from '../Elements/Title'


export function SectionIntroduction() {
  return (
    <>
      <section>
          <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3 items-center px-72 text-center">
            <Title firstTitleBlack="See why we are" titleBlue="trusted" secondTitleBlack="the world over" />
            <TextGray text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.' />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex justify-between">
              <Button variant="gray" text="Branding"/> 
              <Button variant="gray" text="Development"/>
              <Button variant="gray" text="Animation"/> 
              <Button variant="gray" text="User Experience"/> 
              <Button variant="gray" text="Social Network"/> 
              <Button variant="gray" text="Marketing"/>
            </div>

            <div className="flex bg-orange ">
              <div className="flex gap-6 justify-center px-14 flex-col">
              <Title firstTitleBlack="Design Studios That Everyone Should Know"/>
              <TextGray text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
              <Button variant='transparent' text='Learn More' />
              </div>
              <img className="" src={GroupOffice} alt="" />
            </div>
          </div>
          </div>
        </section>
    </>
  )
}