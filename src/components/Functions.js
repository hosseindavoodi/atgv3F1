
// get time function 
export const Rtime = (Timedate) => {
    const splitet =  Timedate.split("T"); 
    const time1 = splitet[1].split(":");
    const time = time1[0] + ":" + time1[1]
    return time;
      }


// get date function
export const Rdate = (Timedate) => {
    const splitet =  Timedate.split("T"); 
    const date = splitet[0];
    return date;
}  


// fetch results data 
var url = "https://www.atg.se/services/racinginfo/v1/api/products/"

export const FetchData = async (set1, set2, set3) => {
    const D1 = await fetch(url + "V75");
    const D2 = await fetch(url + "V86");
    const D3 = await fetch(url + "GS75");
    const response1 = await D1.json();
    const response2 = await D2.json();
    const response3 = await D3.json();
    set1(response1.results)
    set2(response2.results)
    set3(response3.results)
    }

    
// fetch races, Starts and horse detail data 
export const FetchDataDetail = async (setRaces, RacesID) => {
    const DRaces = await fetch("https://www.atg.se/services/racinginfo/v1/api/games/" + RacesID);
    const responseD1 = await DRaces.json();
    setRaces(responseD1.races)
    }   