import React, { useState, Profiler } from "react";

function onRenderCallback(
    id, // The "id" of the Profiler tree
    phase, // "mount" or "update"
    actualDuration, // Time spent rendering the committed update
    baseDuration, // Estimated time to render without memoization
    startTime, // Time when React started rendering
    commitTime, // Time when React committed the update
    interactions // Set of interactions in the update
) {
    console.log(`Component: ${id}`);
    console.log(`Phase: ${phase}`);
    console.log(`Actual Duration: ${actualDuration}ms`);
}

function ProfilerPage() {
    const [count, setCount] = useState(0);

    return (
        <Profiler id="ProfilerPage" onRender={onRenderCallback}>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </Profiler>
    );
}

export default ProfilerPage;
