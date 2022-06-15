
import Races from './Races';
import {Rtime, Rdate} from "./Functions";
import 'bootstrap/dist/css/bootstrap.min.css';

// Results list is created here by fetcheing from Api in App.js and passed here

export default function Results({dataset, error}) {
  
  return (
    <>
    <div id="accordion">
    {
      error ? <p>there is an error</p>
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
            <div className='divA23 float-right'>Date: {Rdate(maininfo.startTime)}</div>  
            <div className='divA23 float-right'>Time: {Rtime(maininfo.startTime)}</div>
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