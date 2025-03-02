import { useTabs } from "../../context/TabsContext";


const Tab = ({ index, children }) => {
    const { activeTab, setActiveTab } = useTabs();

    return (
        <button
            onClick={() => setActiveTab(index)}
            style={{
                padding: "10px",
                margin: "5px",
                background: activeTab === index ? "blue" : "gray",
                color: "white",
            }}
        >
            {children}
        </button>
    );
};

export default Tab;
