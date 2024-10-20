import "./nav.css"
const image = '/images/Capture.PNG'
const images = '/images/Captures.PNG'
const image1 = '/images/Capture1.PNG'
function Nav(){
    return (
      <>
      <h1 className="text-white gow text-center">Grow Your Skills to <br />Advance Your Career path.</h1>
      <p className="text-white educaing text-center">Educating,Inspiring & transforming young women.A Tuituon-Free Private Meddle School</p>
      <div className="sin mt-10 flex">
        <button className="sign p-4">Get Started</button>
        <div className="wach">
          <img src= {image} alt=""  className="image mx-10 mt-1" />
          <h1 className="text-white mx-24 mt-4 video">Watch Video</h1>
        </div>
        <p className="text-white mx-16 -mt-2 noll">365k+ enrolled student</p>
      </div>
      <img src= {images} alt=""  className="float-end mx-44 -mt-10 pic" />
      <img src= {image1} alt=""  className="float-end mt-20 image1" />
      </>
    )
  }
  
  export default Nav;