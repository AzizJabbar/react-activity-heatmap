import React from "react";
import { CellColors, type HeatmapActivity, type HeatmapCell } from "./types";
type Props = {
    activities: Array<HeatmapActivity>;
    startDate?: Date;
    endDate?: Date;
    cellColors?: Partial<CellColors>;
    renderTooltip?: (cell: HeatmapCell) => React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    monthLabelStyle?: React.CSSProperties;
    tooltipStyle?: React.CSSProperties;
    cellStyle?: React.CSSProperties;
    onCellClick?: (cell: HeatmapCell) => void;
};
export declare const ActivityHeatmap: React.FC<Props>;
export {};
