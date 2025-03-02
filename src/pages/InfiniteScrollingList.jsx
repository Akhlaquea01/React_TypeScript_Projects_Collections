import React, { useState, useRef, useCallback } from "react";
import { FixedSizeList as List } from "react-window";

const InfiniteScrollList = () => {
    const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
    const observer = useRef(null);

    // Load More Items
    const loadMoreItems = useCallback(() => {
        console.log("Loading more items...");
        setTimeout(() => {
            setItems((prev) => [
                ...prev,
                ...Array.from({ length: 10 }, (_, i) => `Item ${prev.length + i + 1}`)
            ]);
        }, 1000);
    }, []);

    // Detect when last item is visible
    const lastItemRef = useCallback(
        (node) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreItems();
                }
            });
            if (node) observer.current.observe(node);
        },
        [loadMoreItems]
    );

    // Row Component
    const Row = ({ index, style }) => {
        const isLastItem = index === items.length - 1;
        return (
            <div
                ref={isLastItem ? lastItemRef : null}
                style={{
                    ...style,
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                    background: "#333",
                    color: "#fff",
                    fontSize: "16px",
                }}
            >
                {items[index]}
            </div>
        );
    };

    return (
        <div style={{ width: "300px", height: "500px", border: "2px solid red" }}>
            <h2 style={{ color: "white" }}>Infinite Scroll</h2>
            <List
                height={400} // Visible height
                itemCount={items.length}
                itemSize={50} // Each item height
                width={"100%"}
                style={{ border: "1px solid blue" }}
            >
                {Row}
            </List>
        </div>
    );
};

export default InfiniteScrollList;
