import React from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.scss";
import Results from './components/Results';
//import {FetchDataV75, FetchDataV86, FetchDataGS75,} from './components/Functions';
import useFetch from "./components/useFetch";


export default function App() {
  const [resultsV75, errorV75] = useFetch("./V75.json");
  const [resultsV86, errorV86] = useFetch("./V86.json");
  const [resultsGS75, errorGS75] = useFetch("./GS75.json");


  return (
    <TabsComponent>
      
    <TabList>
        <Tab>GS75</Tab>
        <Tab>V86</Tab>
        <Tab>V75</Tab>
    </TabList>
    
      <TabPanel>
        <Results dataset={resultsGS75} error = {errorGS75}/>
      </TabPanel>
      <TabPanel>
        <Results dataset={resultsV86}  error = {errorV86}/>
      </TabPanel>
      <TabPanel>
        <Results dataset={resultsV75}  error = {errorV75} />
      </TabPanel>
      
  </TabsComponent>
  );
}
