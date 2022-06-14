import React, { useState, useEffect } from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.scss";
import Results from './components/Results';
import {FetchDataV75, FetchDataV86, FetchDataGS75} from './components/Functions';


export default function App() {
const [resultsV75, setResultsV75] = useState([]);
const [resultsV86, setResultsV86] = useState([]);
const [resultsGS75, setResultsGS75] = useState([]);
const [errorV75, setErrorV75] = useState(false)
const [errorV86, setErrorV86] = useState(false)
const [errorGS75, setErrorGS75] = useState(false)


useEffect(()=>{
  FetchDataV75(setResultsV75, setErrorV75);
  FetchDataV86(setResultsV86, setErrorV86);
  FetchDataGS75(setResultsGS75, setErrorGS75);
},[])


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
