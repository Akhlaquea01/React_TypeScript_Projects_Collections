import { useTabs } from "../../context/TabsContext";

const TabPanel = ({ index, children }) => {
    const { activeTab } = useTabs();

    return activeTab === index ? <div className="tab-panel">{children}</div> : null;
};

export default TabPanel;
