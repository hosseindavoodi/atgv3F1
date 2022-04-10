import React, { useState, useEffect } from 'react';
import Starts from './Starts';
import {Rtime} from './Functions'

export default function Reces({RecesID}) {

    const [reces, setReces] = useState([])
    const FetchDataDetail1 = async () => {
    const DReces = await fetch("https://www.atg.se/services/racinginfo/v1/api/games/" + RecesID);
    const responseD1 = await DReces.json();
    setReces(responseD1.races)
    }
    
    useEffect(()=>{
      FetchDataDetail1();
    },[])


    return (
        <>
<div id="accordion1">
        {
          reces.map(det =>(
          
            <div className="card" key={det.id}>
              <div className="card-header card2A">
                <a className="col-12 btn" data-bs-toggle="collapse" href={'#collapse' + det.id}>
                <div className='float-left bold'>{det.number} - Race name: <span className='color1'>{det.name}</span></div> 
                <div className='divA23 float-right'>{Rtime(det.startTime)}</div>
                </a>
              </div>
              <div id={'collapse' + det.id} className="collapse" data-bs-parent="#accordion1">
                <div className="card-body">
                <Starts reces = {reces} DID = {det.id} />
                </div>
              </div>
            </div>
            ))
        }
            
    </div>
        </>
    )
}