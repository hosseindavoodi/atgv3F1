import React, { useState, useEffect } from 'react';
import {FetchDataDetail} from './Functions'
import Starts from './Starts';
import {Rtime} from './Functions'

export default function Reces({RacesID}) {

    const [races, setRaces] = useState([])
    
    useEffect(()=>{
      FetchDataDetail(setRaces, RacesID);
    },[])


    return (
        <>
<div id="accordion1">
        {
          races.map(det =>(
          
            <div className="card" key={det.id}>
              <div className="card-header card2A">
                <a className="col-12 btn" data-bs-toggle="collapse" href={'#collapse' + det.id}>
                <div className='float-left bold'>{det.number} - Race name: <span className='color1'>{det.name}</span></div> 
                <div className='divA23 float-right'>{Rtime(det.startTime)}</div>
                </a>
              </div>
              <div id={'collapse' + det.id} className="collapse" data-bs-parent="#accordion1">
                <div className="card-body">
                <Starts races = {races} DID = {det.id} />
                </div>
              </div>
            </div>
            ))
        }
            
    </div>
        </>
    )
}