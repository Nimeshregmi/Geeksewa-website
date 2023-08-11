import Link from "next/link";
const Subject = ({ sub }) => {
    const year = [2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087];
    return (
        <section className=" selection">
            <div className=" md:w-full justify-center  flex my-4 "><p className="max-md:px-2 md:font-bold flex-wrap text-lg md:text-3xl">{sub}</p></div> 
            <div className="flex md:hidden overflow-x-scroll mx-5 "> {
                year.map((item)=>{
                    return <div className="bg-cyan-400 m-3 rounded-lg  py-1 px-4"><Link href={"/"}>{item}</Link></div>
                })
            }</div>
            
            <div className="flex gap-1">
                {/* FOr larger device  */}
                <div className="md:w-[25vw] hidden md:flex md:flex-col">

                    
                    <div className=" shadow-md shadow-white mx-auto p-3  hidden md:block">
                        {
                            year.map((item)=>{
                                return <div className="my-3">
                                    <h3 className="max-lg:text-xs hover:text-cyan-400"><Link href={"/"}>CG Question Bank {item}</Link></h3>
                                </div>
                            })
                        } </div>
                </div>

                {/* Question section */}
                <div className=" shadow-white shadow-md md:w-[75vw] lg:w-[80vw] md:mb-8 mb-4  h-full mx-3 p-2 md:p-4  ">
                    {/* Heading of the question */}
                    <div className="flex flex-col font-semibold text-lg md:text-xl items-center w-full">
                        <span>Tribhuvan University </span>
                        <span>Institute of Science and Technology </span>
                        <span className="font-semibold">2079</span>
                    </div>
                    {/* subject and marks of the question */}
                    <div className="flex mt-4 items-center justify-between md:px-4">
                        <div className=" font-medium  lg:text-lg text-xs mr-2">
                            <h3>Bachelor Level / third-semester / Science</h3>
                            <h3>Computer Science and Information Technology( CSC209 )</h3>
                            <h3>Computer Graphics</h3>
                        </div>
                        <div className=" font-medium lg:text-lg  text-xs md:mr-2">
                            <h3>Full Marks: 60 + 20 + 20</h3>
                            <h3>Pass Marks: 24 + 8 + 8</h3>
                            <h3>Time: 3 Hours</h3>
                        </div>
                    </div>
                    {/* paragraph for the candidate */}
                    <div className="pl-3 my-6 font-extralight ">
                        <p>Candidates are required to give their answers in their own words as far as practicable.</p>
                        <p> The figures in the margin indicate full marks.</p>
                    </div>

                    {/* Main question section */}
                    <div >
                        {/* section A of question */}
                        <div>
                            <div className=" flex w-full justify-center font-semibold mb-3 md:text-xl"><h1>Section A</h1>
                            </div>
                            <h1 className="font-semibold mb-3 md:text-xl">Attempt any two questions.</h1>
                            {/* Section A questionsss */}
                            <div className=" space-y-4 gap-4">
                                <div className="flex gap-3 my-4"><h1 className="text-lg font-bold">1.</h1>
                                    <p>Explain the working details of Mid-point circle algorithm? Trace the points along the line path having two end points (6,9) and (2,3) using Bresenham’s line drawing algorithm.</p>
                                </div>
                                <hr />
                                <div className="flex gap-3 my-4"><h1 className="text-lg font-bold">1.</h1>
                                    <p >Explain the working details of Mid-point circle algorithm? Trace the points along the line path having two end points (6,9) and (2,3) using Bresenham’s line drawing algorithm.</p>
                                </div>
                                <hr />
                                <div className="flex gap-3 my-4"><h1 className="text-lg font-bold">1.</h1>
                                    <p>Explain the working details of Mid-point circle algorithm? Trace the points along the line path having two end points (6,9) and (2,3) using Bresenham’s line drawing algorithm.</p>
                                </div>
                            </div>
                            <div className="mt-4 gap-4 ">
                                <div className=" flex w-full justify-center font-semibold mb-3 md:text-xl"><h1>Section B</h1>
                                </div>
                                <h1 className="font-semibold mb-3 md:text-xl">Attempt any eight questions.</h1>
                                <div className=" space-y-4 gap-4">
                                    <div className="flex gap-3 my-4"><h1 className="text-lg font-bold">1.</h1>
                                        <p>Explain the working details of Mid-point circle algorithm? Trace the points along the line path having two end points (6,9) and (2,3) using Bresenham’s line drawing algorithm.</p>
                                    </div>
                                    <hr />
                                    <div className="flex gap-3 my-4"><h1 className="text-lg font-bold">1.</h1>
                                        <p >Explain the working details of Mid-point circle algorithm? Trace the points along the line path having two end points (6,9) and (2,3) using Bresenham’s line drawing algorithm.</p>
                                    </div>
                                    <hr />
                                    <div className="flex gap-3 my-4"><h1 className="text-lg font-bold">1.</h1>
                                        <p>Explain the working details of Mid-point circle algorithm? Trace the points along the line path having two end points (6,9) and (2,3) using Bresenham’s line drawing algorithm.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subject
