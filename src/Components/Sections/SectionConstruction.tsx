import PeopleOffice from '../../assets/people-office.png'
import { AiFillFire } from "react-icons/ai";
import { Title } from '../Elements/Title';
import { TextGray } from '../Elements/TextGray';

export function SectionConstruction() {
  return (
    <>
    <section className="flex gap-9">
          <img src={PeopleOffice} alt="" />
          <div className="flex flex-col gap-8">
          <p className='bg-orange text-[#E7958A] w-60 py-1 text-center rounded-full'>What We Do, What You Get</p>
           <Title firstTitleBlack="We believe that our works can" titleBlue="contribute" secondTitleBlack="to a better world."/>
           <TextGray text='Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level.' />
            <div className="border border-dashed border-blue w-auto"></div>
            <div className="grid grid-cols-2 gap-7">
              <div>
                <div className="flex items-center gap-1">
                <AiFillFire className="fill-blue" />
                <h2 className="text-lg">Boost your sale</h2>
                </div>
                <TextGray text='The latest design trends meet hand-crafted templates.' />
              </div>
              <div>
                <div className="flex items-center gap-1">
                <AiFillFire className="fill-blue" />
                <h2 className="text-lg">Smart Installation Tools</h2>
                </div>
                <TextGray text='The latest design trends meet hand-crafted templates.' />
              </div>
              <div>
                <div className="flex items-center gap-1">
                <AiFillFire className="fill-blue" />
                <h2 className="text-lg">Introducing New Features</h2>
                </div>
                <TextGray text='The latest design trends meet hand-crafted templates.' />
              </div>
              <div>
                <div className="flex items-center gap-1">
                <AiFillFire className="fill-blue" />
                <h2 className="text-lg">Dynamic Boosting</h2>
                </div>
                <TextGray text='The latest design trends meet hand-crafted templates.' />
              </div>
            </div>
          </div>
        </section>
    </>
  )
}