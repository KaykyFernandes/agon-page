import { Header } from "./Components/Elements/Header";
import { SectionStart } from "./Components/Sections/SectionStart";
import { SectionIntroduction } from "./Components/Sections/SectionIntroduction";
import { SectionCards } from "./Components/Sections/SectionCards";
import { SectionConstruction } from "./Components/Sections/SectionConstruction";
import { SectionProposals } from "./Components/Sections/SectionProposals";
import { SectionClients } from "./Components/Sections/SectionClients";
import { SectionPlans } from "./Components/Sections/SectionPlans";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <SectionStart  />
        <div className="mx-28 flex flex-col gap-24 mt-24">
          
       <SectionIntroduction />
       
        <SectionCards/>

        <SectionConstruction />
        
        <SectionProposals  />
        
        <SectionClients />
          
        <SectionPlans />    
        
        </div>
      </main>
    </div>
  )
}
