
import ScrollBarUnderNavbar from "@/components/ScrollBarUnderNavbar";
import Image from "next/image"
import Link from "next/link"
export default function Home() {
  const element = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className=" bg-[##1f1f1f] pt-8 w-full items-center">
      {/* <ScrollBarUnderNavbar/> */}
      <div className="flex w-full border-white border-spacing-1 max-ld:w-full lg:justify-center max-lg:px-4 justify-center pb-7 align-middle">
        <div className="flex flex-col mr-2 md:mr-6 ">
          <div className="flex"><h1 className="w-[40vw] my-4  font-serif text-3xl max-md:w-full md:text-5xl ">Study Notes Hub: Sharing Knowledge Simplified</h1>

          </div>
          <p className="w-[30vw] flex flex-wrap justify-start max-md:w-full  ">Welcome to Geeksewa, your go-to platform for sharing study notes and materials among eager learners!</p>
          <Link href={"/CSIT"}><div className="my-4 md:my-10"><button className=" button">View All Courses</button></div></Link>
        </div>
        <Image className="rounded-xl hidden sm:block max-lg:h-[80%] " src={"/img1.webp"} width={300} height={300} alt="Image" />
      </div>

      {/* ALL courses in the homepage */}
      <div className="items-center flex flex-col  p-10" >
        <div><h1 className="font-bold text-3xl pb-4">CSIT Course</h1></div>
        <section className="  mx-26  grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 gap-6  ">
          {
            element.map((item) => (<Link href={"/CSIT"}>
              <div className="bg-[#2f2f2f]  flex rounded-md py-4 px-6 align-middle">
                <div><Image className="rounded-lg mr-4 " src={"/bookImg.webp"} width={50} height={50} /></div>
                <div className="flex flex-col"> <span className="font-semibold ">Csit {item} semister  </span>
                  <span className="font-semibold ">It has 5 subject  </span></div>
              </div>
            </Link>))
          }
        </section>
      </div>

    </div>
  )
}
