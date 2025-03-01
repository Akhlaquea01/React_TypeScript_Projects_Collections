import { useImperativeHandle, forwardRef, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = "";
        },
    }));

    return <input ref={inputRef} type="text" placeholder="Type something..." />;
});

function UseImperativeHandlePage() {
    const inputRef = useRef();

    return (
        <div>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
            <button onClick={() => inputRef.current.clear()}>Clear Input</button>
        </div>
    );
}

export default UseImperativeHandlePage;
