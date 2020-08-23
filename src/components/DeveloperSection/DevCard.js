import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const Github = <FontAwesomeIcon icon={faGithub} size="2x"/>
const Linkedin = <FontAwesomeIcon icon={faLinkedinIn} size="2x"  />
const Instagram = <FontAwesomeIcon icon={faInstagram} size="2x" />



const DevCard=(props)=>(

  
  
    <div className="card">
    <img className="card-img-top" src={props.img} alt="" />
    <div className="card-body">
<h5 className="card-title">{props.name}</h5>
   <div style={{display:"flex",justifyContent:"space-around"}}>
  {Github}
  {Linkedin}
  {Instagram}
     </div>
    </div>
  </div>
)

export default DevCard;
