import { createContext, useContext, useState } from "react";

// Create context
const AccordionContext = createContext();

// Custom hook to use context
export const useAccordion = () => useContext(AccordionContext);

// Provider component
export const AccordionProvider = ({ children }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
            {children}
        </AccordionContext.Provider>
    );
};
