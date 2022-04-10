

import {Rtime, Rdate} from './../components/Functions';
import {Results} from './../components/Results';


it('it should give the time', ()=>{
  const res = Rtime("2022-04-09T16:20:00");
  expect(res).toBe("16:20")
 })


 it('it should give the date', ()=>{
  const res = Rdate("2022-04-09T16:20:00");
  expect(res).toBe("2022-04-09")
 })

 

