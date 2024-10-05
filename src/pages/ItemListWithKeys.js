import React from 'react';

function ItemListWithKeys() {
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Grapes' }
    ];

    return (
        <ul className="list-disc pl-6">
            {items.map((item) => (
                <li key={item.id} className="mb-2 text-lg text-gray-700">
                    {item.name}
                </li>
            ))}
        </ul>
    );
}

export default ItemListWithKeys;
