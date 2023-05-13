

import {raceTime, raceDate} from '../utils/Functions';


it('it should give the time', ()=>{
  const res = raceTime("2022-04-09T16:20:00");
  expect(res).toBe("16:20")
 })


 it('it should give the date', ()=>{
  const res = raceDate("2022-04-09T16:20:00");
  expect(res).toBe("2022-04-09")
 })


 it('first fetch test', async () => {
  const res = await fetch('https://www.atg.se/services/racinginfo/v1/api/products/V75');
  const result = await res.json();
  expect(result.results[0].tracks[0].name).toBe("Gävle");  
});

it('second fetch test', async () => {
  const res = await fetch('https://www.atg.se/services/racinginfo/v1/api/games/V75_2022-04-09_7_5');
  const result = await res.json();
  expect(result.races[0].name).toBe("Malmö Mur och Puts - STL Diamantstoet, försök 3 i meeting 3 (Final Solvalla 28 maj)"); 
})
 

