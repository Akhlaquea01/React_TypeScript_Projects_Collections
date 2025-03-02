import { AccordionProvider } from "../../context/AccordionContext";


const Accordion = ({ children }) => {
    return <AccordionProvider><div className="accordion">{children}</div></AccordionProvider>;
};

export default Accordion;
