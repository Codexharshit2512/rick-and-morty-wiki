import React from 'react'
import devs from './Developers'
import DevCard from './DevCard'

const DevSection = ()=>(
   
    <div className="dev-section container">
        <h1 className="display-4 text-center" style={{color:"white" , marginTop:20}}>Developers</h1>
        <div className="developers">
            <div className="row">
                { devs.map((dev)=>(
                    <div className="col-sm" key={dev.name}>
                        <DevCard img={dev.image} name={dev.name} />
                    </div>
                )) }
            </div>
        </div>
    </div>

)

export default DevSection;