import React, { useState, useEffect } from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import Results from './components/Results';
import {FetchData} from './components/Functions';



export default function App() {
const [resultsV75, setResultsV75] = useState([]);
const [resultsV86, setResultsV86] = useState([]);
const [resultsGS75, setResultsGS75] = useState([]);

useEffect(()=>{
  FetchData(setResultsV75, setResultsV86, setResultsGS75);

},[])


  return (
    <TabsComponent>
    <TabList>
        <Tab>GS75</Tab>
        <Tab>V86</Tab>
        <Tab>V75</Tab>
        
        
    </TabList>
      <TabPanel>
        <Results dataset={resultsGS75} />
      </TabPanel>
      <TabPanel>
        <Results dataset={resultsV86} />
      </TabPanel>
      <TabPanel>
        <Results dataset={resultsV75} />
      </TabPanel>
      
      
  </TabsComponent>
  );
}
