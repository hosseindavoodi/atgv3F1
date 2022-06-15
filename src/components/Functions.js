
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

    
// fetch races, Starts and horse detail data 
export const FetchDataDetail = async (setRaces, RacesID) => {
        const DRaces = await fetch("https://www.atg.se/services/racinginfo/v1/api/games/" + RacesID);
        const responseD1 = await DRaces.json();
        setRaces(responseD1.races)
    }   














































    