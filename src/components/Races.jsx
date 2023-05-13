import React, { useState, useEffect } from 'react';
import {FetchDataDetail} from '../utils/Functions'
import Starts from './Starts';
import { raceTime } from '../utils/Functions';

export default function Races({RacesID}) {

    const [races, setRaces] = useState([])
    
    useEffect(()=>{
      FetchDataDetail(setRaces, RacesID);
    },[RacesID])


    return (
        <>
<div id="accordion1">
        {
          races.map(item =>(
            <div className="card" key={item.id}>
              <div className="card-header card2A">
                <a className="col-12 btn" data-bs-toggle="collapse" href={'#collapse' + item.id}>
                <div className='float-left '>{item.number} -  
                  {
                  item.name == null? " (Race name does not exist !!)" :
                  <>Race name: <span className='color1 bold'> {item.name}</span></>
                  }
                  </div> 
                <div className='divA23 float-right'>{raceTime(item.startTime)}</div>
                </a>
              </div>
              <div id={'collapse' + item.id} className="collapse" data-bs-parent="#accordion1">
                <div className="card-body">
                <Starts races = {races} DID = {item.id} />
                </div>
              </div>
            </div>
            ))
        }
            
    </div>
        </>
    )
}