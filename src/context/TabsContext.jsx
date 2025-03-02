import { createContext, useContext, useState } from "react";

// Create Context
const TabsContext = createContext();

// Custom Hook for using Tabs Context
export const useTabs = () => useContext(TabsContext);

// Tabs Provider Component
export const TabsProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
};
