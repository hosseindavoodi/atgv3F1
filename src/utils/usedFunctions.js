
// get time function 
export const raceTime = (timeDate) => {
    const splitet =  timeDate.split("T"); 
    const time1 = splitet[1].split(":");
    const time = time1[0] + ":" + time1[1]
    return time;
      }


// get date function
export const raceDate = (timeDate) => {
    const splitet =  timeDate.split("T"); 
    const date = splitet[0];
    return date;
}  

    
// fetch races, Starts and horse detail data 
export const FetchDataDetail = async (setRaces, racesID) => {
    try {
        const request = await fetch("https://www.atg.se/services/racinginfo/v1/api/games/" + racesID);
        const response = await request.json();
        setRaces(response.races)
    }
    catch (error) {
            console.log("there is an error")
    }
    }   














































    