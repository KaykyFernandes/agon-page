import { Button } from "./Button"
import { MdOutlineComputer } from 'react-icons/md'

export function Header() {
  return (
    <div>
      <header className="flex justify-around items-center h-20">
        
        <h2 className="flex items-center gap-1 text-2xl font-bold text-blue"> <MdOutlineComputer /> Agon</h2>
        <ul className="flex justify-center gap-20">
          <li className=" hover:text-blueLight hover:border-b hover:border-blueLight py-7 cursor-pointer">Home</li>
          <li className=" hover:text-blueLight hover:border-b hover:border-blueLight py-7 cursor-pointer">About</li>
          <li className=" hover:text-blueLight hover:border-b hover:border-blueLight py-7 cursor-pointer">Company</li>
          <li className=" hover:text-blueLight hover:border-b hover:border-blueLight py-7 cursor-pointer">Pages</li>
          <li className=" hover:text-blueLight hover:border-b hover:border-blueLight py-7 cursor-pointer">Blog</li>
          <li className=" hover:text-blueLight hover:border-b hover:border-blueLight py-7 cursor-pointer">Shop</li>
        </ul>
        <Button variant="black" text='Get Started'/>
      </header>
    </div>
  )
}