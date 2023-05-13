
import Races from './Races';
import {raceTime, raceDate} from "../utils/Functions";
import './bootstrap/bootstrap.min.css';

// Results list is created here by fetcheing from Api in App.js and passed here

export default function Results({dataset}) {
  
  return (
    <>
    <div id="accordion">
    {
      !dataset ? <p>there is no Data</p>
      :
      dataset && dataset.map(maininfo =>(
        <div className="card" key={maininfo.id}>
          <div className="card-header">
            <a className="col-12 btn " data-bs-toggle="collapse" href={'#collapse' + maininfo.id}>
              {
                maininfo.tracks.map((tr) =>( 
            <div key={tr.id} className='float-left bold titleR'>{" - " + tr.name}</div> 
                ))
              }
            <div className='divA23 float-right'>Date: {raceDate(maininfo.startTime)}</div>  
            <div className='divA23 float-right'>Time: {raceTime(maininfo.startTime)}</div>
            </a>
          </div>
          <div id={'collapse' + maininfo.id} className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            <Races RacesID = {maininfo.id}  />
            </div>
          </div>
        </div>
        ))
    }
    </div>
  
    </>
)
}