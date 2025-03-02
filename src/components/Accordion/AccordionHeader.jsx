import { useAccordion } from "../../context/AccordionContext";


const AccordionHeader = ({ index, children }) => {
    const { openIndex, setOpenIndex } = useAccordion();
    return (
        <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {children}
        </button>
    );
};

export default AccordionHeader;
