import React, { useState } from 'react'
import PassingProps from './PassingProps'

export default function FunctionalComponent() {
    const [count, setCount] = useState(0);
    const [childData, setChildData] = useState('');

    const handleDataFromChild = (data) => {
        console.log(data,'child to parent');
        
        setChildData(data);
    };
    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Functional Component Example</h2>
            <p className='mb-2'>This is a simple functional component.</p>
            <p className='mb-2'>Current Count: {count}</p>
            <button
                className="mt-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCount(count + 1)}
            >
                Increment Count
            </button>
            <div className="p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4 text-center">Parent Component</h1>
                <p className="mb-4 text-lg">Data from Child: {childData}</p>
                <PassingProps message='Akhlaque' sendData={handleDataFromChild}></PassingProps>
            </div>
        </div>
    )
}
