
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

export const FetchDataV75 = async (setV75) => {
        try {
        const DV75 = await fetch("./V75.json");
        const responseDV75 = await DV75.json();
        setV75(responseDV75.results)
        }   
        catch (error) {
            console.log(error);
            
        }
    }

export const FetchDataV86 = async (setV86) => {
        try {
        const DV86 = await fetch("./V86.json");
        const responseDV86 = await DV86.json();
        setV86(responseDV86.results)
        }   
        catch (error) {
            console.log(error)
        }
    }


export const FetchDataGS75 = async (setGS75) => {
        try {
        const DGS75 = await fetch("./GS75.json");
        const responseDGS75 = await DGS75.json();
        setGS75(responseDGS75.results)
        }   
        catch (error) {
            console.log(error)
        }
    }

    
// fetch races, Starts and horse detail data 
export const FetchDataDetail = async (setRaces, RacesID) => {
    const DRaces = await fetch("https://www.atg.se/services/racinginfo/v1/api/games/" + RacesID);
    const responseD1 = await DRaces.json();
    setRaces(responseD1.races)
    }   














































    