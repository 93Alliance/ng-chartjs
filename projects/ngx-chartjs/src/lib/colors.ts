export interface Color {
    backgroundColor?: string | string[];
    borderWidth?: number | number[];
    borderColor?: string | string[];
    borderCapStyle?: string;
    borderDash?: number[];
    borderDashOffset?: number;
    borderJoinStyle?: string;

    pointBorderColor?: string | string[];
    pointBackgroundColor?: string | string[];
    pointBorderWidth?: number | number[];

    pointRadius?: number | number[];
    pointHoverRadius?: number | number[];
    pointHitRadius?: number | number[];

    pointHoverBackgroundColor?: string | string[];
    pointHoverBorderColor?: string | string[];
    pointHoverBorderWidth?: number | number[];
    pointStyle?: string | string[];

    hoverBackgroundColor?: string | string[];
    hoverBorderColor?: string | string[];
    hoverBorderWidth?: number;
}

// Default colors
export const DefaultColors: number[][] = [
    [63, 81, 181],       // Indogo
    [233, 30, 99],       // Pink
    [156, 39, 176],      // Purple
    [0, 188, 212],       // Cyan
    [3, 169, 244],       // Light Blue
    [0, 150, 136],       // Teal
    [255, 152, 0],       // Orange
    [96, 125, 139],      // Blue Grey
    [255, 193, 7],       // Amber
    [37, 155, 36],       // Green
    [205, 220, 57],      // Lime
    [86, 119, 252]       // Blue
];

// pie | doughnut
export interface Colors extends Color {
    data?: number[];
    label?: string;
}

function rgba(colour: number[], alpha: number): string {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatLineColor(colors: number[]): Color {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}

function formatBarColor(colors: number[]): Color {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}

function formatPieColors(colors: number[][]): Colors {
    return {
        backgroundColor: colors.map((color: number[]) => rgba(color, 0.6)),
        borderColor: colors.map(() => '#fff'),
        pointBackgroundColor: colors.map((color: number[]) => rgba(color, 1)),
        pointBorderColor: colors.map(() => '#fff'),
        pointHoverBackgroundColor: colors.map((color: number[]) => rgba(color, 1)),
        pointHoverBorderColor: colors.map((color: number[]) => rgba(color, 1))
    };
}

function formatPolarAreaColors(colors: number[][]): Color {
    return {
        backgroundColor: colors.map((color: number[]) => rgba(color, 0.6)),
        borderColor: colors.map((color: number[]) => rgba(color, 1)),
        hoverBackgroundColor: colors.map((color: number[]) => rgba(color, 0.8)),
        hoverBorderColor: colors.map((color: number[]) => rgba(color, 1))
    };
}

function getRandomColor(): number[] {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}

/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index: number): number[] {
    return DefaultColors[index] || getRandomColor();
}

/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count: number): number[][] {
    const colorsArr: number[][] = new Array(count);
    for (let i = 0; i < count; i++) {
        colorsArr[i] = DefaultColors[i] || getRandomColor();
    }
    return colorsArr;
}

/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
export function getColors(chartType: string, index: number, count: number): Color | number[] {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }

    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }

    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }

    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
