const pic1 = '/images/pic1.PNG'
const pic2 = '/images/pic2.PNG'
const pic3 = '/images/pic3.PNG'
import "./categories.css"
const pics1 = '/images/pics1.PNG'
const pics2 = '/images/pics2.PNG'
const pics3 = '/images/pics3.PNG'
const pics4 = '/images/pics4.PNG'
const pics5 = '/images/pics5.PNG'
const pics6 = '/images/pics6.PNG'
const pics7 = '/images/pics7.PNG'
const pics8 = '/images/pics8.PNG'
function Categories() {
    return(
        <>
            <div className="">
                <div className="keg">
                    <div className="flex bag">
                        <div className="cbn -mx-16">
                            <img src= {pic1} alt=""  className="pics1" />
                        </div>

                        <div className="cbn1">
                            <img src= {pic2} alt=""  className="pics2"/>
                        </div>

                        <div className="cbn2">
                            <img src= {pic3} alt=""  className="pics3" />
                        </div>
                    </div>
                </div>
                <div className="bg-white mat flex -mt-72 hjh">
                    <div className="block">
                        <h1 className="cat pt-20 mx-20 ">Explore<br />Our<br />Categories</h1>
                        <p className="lock mx-20 mt-10">Look into yourself, get something in return<br />as you Achievement look into yourself, get<br/>
                            something Reurn as your achievement.
                        </p>
                        <a href="#" className="button text-white mx-20 p-5 pr-10 px-10">Explore Categories</a>
                    </div>
                    <div className="block kkp">
                        <div className="mti flex">
                            <div>
                                <img src={pics1} alt="" className="piks"/>
                                <p className="youd text-center">Data Science</p>
                            </div>
                            <div>            
                               <img src={pics2} alt="" className="piks"/>
                                <p className="youd text-center">English</p>
                            </div>
                            <div>
                                <img src={pics3} alt="" className="piks"/>
                                <p className="youd text-center">Finance</p>
                            </div>
                            <div className="lol">
                                <img src={pics4} alt="" className="piks "/>
                                <p className="youd text-center -mx-8">Contact Writting</p>
                            </div>
                        </div>
                        <div className="flex hhi">
                            <div className="jfd">
                                <img src={pics5} alt="" className="piks "/>
                                <p className="youd text-center">Development</p>
                            </div>
                            <div className="jfd2">
                                <img src={pics6} alt="" className="piks "/>
                                <p className="youd text-center">Art & Design</p>
                            </div>
                            <div className="jfd3">
                                <img src={pics7} alt="" className="piks "/>
                                <p className="youd text-center">Management</p>
                            </div>
                            <div className="jfd4">
                                <img src={pics8} alt="" className="piks "/>
                                <p className="youd text-center">Business</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}
export default Categories;