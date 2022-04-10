
import Races from './Races';
import {Rtime, Rdate} from "./Functions";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Results({dataset}) {


    return (
        <>
        <div id="accordion">
        {
          dataset.map(maininfo =>(
            <div className="card" key={maininfo.id}>
              <div className="card-header">
                <a className="col-12 btn " data-bs-toggle="collapse" href={'#collapse' + maininfo.id}>
                <div className='float-left bold titleR'>{maininfo.tracks[0].name} </div>
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