
// Starts list and horse data detail is created here by passing data from Races.js

export default function Starts({races, DID}) {

    return (
        <>
        
        {
          races.map(det =>(
            det.starts.map(staD=>{
          return det.id == DID ?
          <div id={'accordion2' + det.id} key={"b" + staD.number}>
              <div className="card"  >
                <div className="card-header">
                  <a className="btn" data-bs-toggle="collapse" href={'#collapse' + det.id + staD.number}>
                  {staD.number} - Horse name: <span className='color1'>{staD.horse.name}</span> - 
                  Driver name: <span className='color1'>{staD.driver.firstName}  {staD.driver.lastName}</span>
                  </a>
                </div>
                <div id={'collapse' + det.id + staD.number} className="collapse" data-bs-parent={'#accordion2' + det.id + staD.number}>
                  <div className="card-body Ayel">
                  <div className='divA24 float-left'><b>Trainer:</b> {staD.horse.trainer.firstName} {staD.horse.trainer.lastName}</div>
                  <div className='divA24 float-left'><b>Father name:</b> {staD.horse.pedigree.father.name}</div>
                  </div>
                </div>
              </div>
              </div>
          : ""
              })
              ))
          }
    
    

        </>
    )
}