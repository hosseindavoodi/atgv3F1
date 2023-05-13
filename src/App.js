import React from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.scss";
import Results from './components/Results';
import useFetch from "./components/useFetch";


export default function App() {
  const [resultsV75] = useFetch("./V75.json");
  const [resultsV86] = useFetch("./V86.json");
  const [resultsGS75] = useFetch("./GS75.json");


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
        <Results dataset={resultsV86}  />
      </TabPanel>
      <TabPanel>
        <Results dataset={resultsV75}  />
      </TabPanel>
      
  </TabsComponent>
  );
}
