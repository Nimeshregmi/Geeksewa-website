

const ScrollBarUnderNavbar = () => {
    const elementList = [ "HTML", "CSS", "JAVASCRIPT", "SQL", "PYTHON", "JAVA", "PHP","C","C++","C#","BOOTSTRAP","REACT","MYSQL","JQUERY","EXCEL","XML","DJANGO","NODEJS","R","TYPESCRIPT","ANGULAR","GIT","POSTGRESQL","MONGODB","ASP","AWS","AI", "GO","KOTLIN", "SASS","VUE","GEN-AI", "CYBERSECURITY", "DATA SCIENCE" ];
    return (
        <>
            {/* <div className="">
                <div  className="flex ">
                    <div className="hidden md:block cursor-pointer" >
                        <span >&nbsp;&nbsp;&nbsp;❮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div id="menubtn_container">
                        <span>

                            <a href="javascript:void(0);" className="topnav-icons fa fa-menu w3-hide-large w3-hide-medium w3-hide-small w3-left w3-bar-item w3-button ga-nav" onclick="open_menu()" title="Menu"></a>

                        </span>
                    </div>
                    <div className="overflow-scroll scro">{
                        elementList.map((item)=>(
                            <a href={`/${item}` } className="p-3 text-center  font-bold hover:bg-black rounded-md" title="HTML Tutorial">{item}</a>
                        ))
                    }</div>
                    <a href="javascript:void(0)"></a>
                    <div >
                        <div  className="cursor-pointer">
                            <span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❯&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default ScrollBarUnderNavbar;
