import Link from "next/link";

export default function Semister({ semisters, param1 ,sub }) {
    return (<>
        <div >
            <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase justify-start md:mx-10 text-2xl flex ">{semisters} Semister</h5>
                <div>{
                    sub.map((item) => (<ul className="mb-0 "><li className="justify-start md:mx-10 flex">
                    <Link legacyBehavior href={`/${param1}/${item}`}><a className="text-white hover:text-cyan-400  font-light">{item}</a></Link>
                </li>
                </ul>)
                    )
                }</div>
                
            </div>

        </div>
    </>);
}



{/* <ul className="mb-0 ">
                    
                    <li className="justify-center flex">
                        <Link legacyBehavior href={`/${param1}/${param2}`} ><a className="text-white ">Link 1</a></Link>
                    </li>
                    <li className="justify-center flex">
                        <Link legacyBehavior href="#!"><a className="text-white ">Link 2</a></Link>
                    </li>
                    <li className="justify-center flex">
                        <Link legacyBehavior href="#!"><a className="text-white ">Link 3</a></Link>
                    </li>
                    <li className="justify-center flex">
                        <Link legacyBehavior href="#!"><a className="text-white ">Link 4</a></Link>
                    </li>
                </ul> */}