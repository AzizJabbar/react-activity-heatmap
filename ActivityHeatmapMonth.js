var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./ActivityHeatmapMonth.module.css";
import { Tooltip } from "./Tooltip";
import { getColor } from "./utils";
export var ActivityHeatmapMonth = function (_a) {
    var cells = _a.cells, monthName = _a.monthName, columnSizeInCells = _a.columnSizeInCells, cellColors = _a.cellColors, renderTooltip = _a.renderTooltip, monthLabelStyle = _a.monthLabelStyle, tooltipStyle = _a.tooltipStyle, cellStyle = _a.cellStyle, onCellClick = _a.onCellClick;
    return (_jsxs("div", { className: styles.container, children: [_jsx("div", { className: styles.grid, style: { "--cols": columnSizeInCells }, children: cells.map(function (cell, i) {
                    if (cell === "invisible") {
                        return _jsx("div", { className: styles.cellInvisible }, i);
                    }
                    return (_jsxs(Tooltip, { content: renderTooltip
                            ? renderTooltip(cell)
                            : "".concat(cell.count, " ").concat(cell.count === 1 ? "activity" : "activities", " on ").concat(cell.date), style: __assign({}, tooltipStyle), children: [_jsx("div", { onClick: function () { return onCellClick === null || onCellClick === void 0 ? void 0 : onCellClick(cell); }, className: styles.cell, style: __assign({ backgroundColor: getColor(cell.level, cellColors) }, cellStyle) }), " "] }, i));
                }) }), columnSizeInCells >= 3 && (_jsx("div", { className: styles.monthName, style: monthLabelStyle, children: monthName.slice(0, 3) }))] }));
};
