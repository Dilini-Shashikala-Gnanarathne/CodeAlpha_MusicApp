import {  useState } from "react";
import {
  closeIcon,
  homeIcon,
  userIcon,
} from "../../assets";

import "./style.css";

const FixFooter = ({ trackIndex, audioList }) => {
  const [slideUp, setSlideUp] = useState(false);

  return (
    <div
      className={`fix-footer 
      
      ${
        slideUp ? "active" : ""
      }`}
    >
      <div
        
        className="slide-up-btn"
      ></div>

      <div className="d-visilibity"></div>

    

      {!slideUp && (
        <>
             <div className="mini-player flex justify-sb align-center mtb-10">
             <div className="flex align-center">
               <div className="artist-cover-img">
                 <img 
                 />
               </div>
               <div className="mini-player-info mlr-10">
                 <p>aaaa</p>
                 <p>bbbb</p>
               </div>
             </div>
             <div className="mini-player-control flex">
               <button 
               >
               </button>
               <button>
                 <img src={closeIcon} />
               </button>
             </div>
           </div>
      

         {/* navigation menu */}
         <div className="navigation-menu flex justify-evenly">
           <a>
             <div>
               <img src={homeIcon} />
             </div>
             <div>
               <span>Home</span>
             </div>
           </a>
           <a>
             <div>
               <img src={userIcon} />
             </div>
             <div>
               <span>Profile</span>
             </div>
           </a>
         </div>
       /</>
      )}     
    </div>
  );
};

export default FixFooter;
