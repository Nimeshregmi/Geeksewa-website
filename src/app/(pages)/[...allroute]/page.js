
import Semister from "@/components/semister";
import Subject from "@/components/subject";
import { CsitSub,sem } from "@/constants/Lists";
import Notfound from "./404";
export default function BCA({ params }) {
    var lengthofroute = params.allroute;
    if (  lengthofroute[0]=="CSIT"|| lengthofroute[0]=="BIT" ||lengthofroute[0]=="BCA" && lengthofroute.length == 1 ) {
        return (<>
            <section className="flex flex-col ">
                <div className="container mt-6 mb-7 mx-auto shadow-md uppercase text-2xl font-bold items-center flex  justify-center w-[98vw]"><span>{params.allroute[0]} Course </span></div>
                <hr />
                <div className="container justify-center px-3 lg:px-6 p-6 max-md:ml-4  grid-cols-1  grid md:grid-cols-2 lg:grid-cols-4 gap-1  ">
                    {
                        CsitSub.map((item) => {
                            return (<div><Semister  sub={item} param1={lengthofroute[0]} /></div>);
                        })
                    }
                </div>
            </section>
        </>);
    }
    else if(lengthofroute.length==1 && lengthofroute[0]=="this"){
        return <div>
            <div className="text-7xlxl"> this is thi8s page</div>
        </div>
    }
    else if (lengthofroute.length == 2) {
        return (<>
        <div>
            <Subject sub={lengthofroute[1]}/>            
            </div></>)
    }
    // else{
    //     return <>
    //     <Notfound/>
    //     </>
    // }


}