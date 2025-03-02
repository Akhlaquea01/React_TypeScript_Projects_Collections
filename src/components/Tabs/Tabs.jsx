import { TabsProvider } from "../../context/TabsContext";


const Tabs = ({ children }) => {
    return <TabsProvider>{children}</TabsProvider>;
};

export default Tabs;
