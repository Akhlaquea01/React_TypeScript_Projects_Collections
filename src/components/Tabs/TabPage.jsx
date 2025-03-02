import React from "react";
import Tab from "./Tab";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import Tabs from "./Tabs";

const TabPage = () => {
    return (
        <Tabs>
            <TabList>
                <Tab index={0}>Tab 1</Tab>
                <Tab index={1}>Tab 2</Tab>
                <Tab index={2}>Tab 3</Tab>
            </TabList>
            <TabPanel index={0}>Content for Tab 1</TabPanel>
            <TabPanel index={1}>Content for Tab 2</TabPanel>
            <TabPanel index={2}>Content for Tab 3</TabPanel>
        </Tabs>
    );
};

export default TabPage;