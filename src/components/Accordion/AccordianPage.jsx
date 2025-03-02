import Accordion from "./Accordion";
import AccordionHeader from "./AccordionHeader";
import AccordionItem from "./AccordionItem";
import AccordionPanel from "./AccordionPanel";


const AccordionPage = () => {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionHeader index={0}>Section 1</AccordionHeader>
                <AccordionPanel index={0}>Content for Section 1</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader index={1}>Section 2</AccordionHeader>
                <AccordionPanel index={1}>Content for Section 2</AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionPage;
