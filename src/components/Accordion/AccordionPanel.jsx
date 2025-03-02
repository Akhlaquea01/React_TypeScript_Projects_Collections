import { useAccordion } from "../../context/AccordionContext";


const AccordionPanel = ({ index, children }) => {
    const { openIndex } = useAccordion();
    return openIndex === index ? <div className="accordion-panel">{children}</div> : null;
};

export default AccordionPanel;
