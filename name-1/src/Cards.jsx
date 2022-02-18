import React from 'react';
import "./Cards.css";


export default function Cards(props) {
  return (
    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="" />

           <div className="card_info">

               <span className="card_category">{props.title}</span>
               <h3 className="">{props.sname}</h3>

               <a href={props.link} target="_blank">
                   <button className="btn">watch now</button>
               </a>
           </div>


        </div>
    </div>
  )
}
