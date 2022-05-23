
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
//var url = "https://www.atg.se/services/racinginfo/v1/api/products/"

export const FetchData = async (setV75, setV86, setGS75) => {
    const DV75 = await fetch("./V75.json");
    const DV86 = await fetch("./V86.json");
    const DGS75 = await fetch("./GS75.json");
    const responseDV75 = await DV75.json();
    const responseDV86 = await DV86.json();
    const responseDGS75 = await DGS75.json();
    setV75(responseDV75.results)
    setV86(responseDV86.results)
    setGS75(responseDGS75.results)
    }

    
// fetch races, Starts and horse detail data 
export const FetchDataDetail = async (setRaces, RacesID) => {
    const DRaces = await fetch("https://www.atg.se/services/racinginfo/v1/api/games/" + RacesID);
    const responseD1 = await DRaces.json();
    setRaces(responseD1.races)
    }   














































    