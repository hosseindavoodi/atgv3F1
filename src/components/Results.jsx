
import Races from './Races';
import {raceTime, raceDate} from "../utils/usedFunctions";
import './bootstrap/bootstrap.min.css';

// Results list is created here by fetcheing from Api in App.js and passed here

export default function Results({dataset}) {
  
  return (
    <>
    <div id="accordion">
    {
      !dataset ? <p>there is no Data</p>
      :
      dataset && dataset.map(mainInfo =>(
        <div className="card" key={mainInfo.id}>
          <div className="card-header">
            <a className="col-12 btn " data-bs-toggle="collapse" href={'#collapse' + mainInfo.id}>
              {
                mainInfo.tracks.map((tr) =>( 
            <div key={tr.id} className='float-left bold titleR'>{" - " + tr.name}</div> 
                ))
              }
            <div className='divA23 float-right'>Date: {raceDate(mainInfo.startTime)}</div>  
            <div className='divA23 float-right'>Time: {raceTime(mainInfo.startTime)}</div>
            </a>
          </div>
          <div id={'collapse' + mainInfo.id} className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            <Races RacesID = {mainInfo.id}  />
            </div>
          </div>
        </div>
        ))
    }
    </div>
  
    </>
)
}