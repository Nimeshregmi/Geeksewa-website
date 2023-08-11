import Link from "next/link"
import { BiSearchAlt } from "react-icons/bi";
export default function NavbarsecondPart(){
    return (<div className="flex md:mr-6 mr-3" >
    <div className="flex items-center "><input type="text" className="h-8 hidden lg:flex rounded-lg px-2 text-black w-56" />
        <button className="p-2 mx-1  rounded-lg text-xl hover:bg-slate-400 text-white " onClick={null}>< BiSearchAlt /></button>
    </div>
    <div className="flex items-center font-bold ">
        <Link href={'/login'}><div className="p-2 px-4 bg-green-400 rounded-xl cursor-pointer md:text-md hover:bg-green-600 hidden sm:flex">Log In</div></Link>
        <div className="p-2 px-4 m-1 bg-green-400  rounded-xl cursor-pointer hover:bg-green-600">Sin Up</div>
    </div>
    </div>)
}