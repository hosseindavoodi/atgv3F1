

export default function Starts({races, DID}) {
    return (
        <>
        {
          races.map(param =>(
            param.starts.map(item=>{
          return param.id === DID &&
          <div id={'accordion2' + param.id} key={"b" + item.number}>
              <div className="card"  >
                <div className="card-header">
                  <a className="btn" data-bs-toggle="collapse" href={'#collapse' + param.id + item.number}>
                  {item.number} - Horse name: <span className='color1'>{item.horse.name}</span> - 
                  Driver name: <span className='color1'>{item.driver.firstName}  {item.driver.lastName}</span>
                  </a>
                </div>
                <div id={'collapse' + param.id + item.number} className="collapse" data-bs-parent={'#accordion2' + param.id + item.number}>
                  <div className="card-body Ayel">
                  <div className='divA24 float-left'><b>Trainer:</b> {item.horse.trainer.firstName} {item.horse.trainer.lastName}</div>
                  <div className='divA24 float-left'><b>Father name:</b> {item.horse.pedigree.father.name}</div>
                  </div>
                </div>
              </div>
              </div>
              })
              ))
          }
    
    

        </>
    )
}