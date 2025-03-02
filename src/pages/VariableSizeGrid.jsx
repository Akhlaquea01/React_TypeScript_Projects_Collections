import React from "react";
import { FixedSizeGrid as Grid } from "react-window";

const columnCount = 5;
const rowCount = 1000;
const columnWidth = 120;
const rowHeight = 50;

const Cell = ({ columnIndex, rowIndex, style }) => (
    <div style={{ ...style, border: "1px solid #ccc", textAlign: "center", padding: "10px" }}>
        Row {rowIndex} - Col {columnIndex}
    </div>
);

export default function VirtualizedGrid() {
    return (
        <Grid
            columnCount={columnCount}
            rowCount={rowCount}
            columnWidth={columnWidth}
            rowHeight={rowHeight}
            height={300} // Visible height
            width={600} // Visible width
        >
            {Cell}
        </Grid>
    );
}
