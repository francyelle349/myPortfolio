import './redes.css'

import Image from "/woman2.svg"

function Redes(){
    return(<>
    <div className='item'>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

      <div className='subItem'>


        

          
        <div className='subItemTitleSocial'>
           <h3>You Can Reach Out </h3>
        <div className='socialMedia'>

           
       
        <a href="https://www.linkedin.com/in/francyelle-souza-245968350/"> <i className="uil uil-linkedin" id="link"></i> </a>
        <a href="https://github.com/francyelle349"> <i className="uil uil-github" id="git" ></i> </a>

        
        </div>
        </div>

      </div>

      <div className='images'>
        <img src={Image} alt="" />
      </div>

        

    </div>
    </>);
}

export default Redes;