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
    [0, 150, 136],       // Teal
    [255, 152, 0],       // Orange
    [233, 30, 99],       // Pink
    [156, 39, 176],      // Purple
    [0, 188, 212],       // Cyan
    [3, 169, 244],       // Light Blue
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

export function rgba(colour: number[], alpha: number): string {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatLineColor(colors: number[]): Color {
    return {
        backgroundColor: rgba(colors, 0.35),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.95)
    };
}

export function formatBarColor(colors: number[]): Color {
    return {
        backgroundColor: rgba(colors, 0.75),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 1),
        hoverBorderColor: rgba(colors, 1)
    };
}

export function formatPieColors(colors: number[][]): Colors {
    return {
        backgroundColor: colors.map((color: number[]) => rgba(color, 0.76)),
        borderColor: colors.map(() => '#fff'),
        pointBackgroundColor: colors.map((color: number[]) => rgba(color, 1)),
        pointBorderColor: colors.map(() => '#fff'),
        pointHoverBackgroundColor: colors.map((color: number[]) => rgba(color, 1)),
        pointHoverBorderColor: colors.map((color: number[]) => rgba(color, 1))
    };
}

export function formatPolarAreaColors(colors: number[][]): Color {
    return {
        backgroundColor: colors.map((color: number[]) => rgba(color, 0.75)),
        borderColor: colors.map((color: number[]) => rgba(color, 1)),
        hoverBackgroundColor: colors.map((color: number[]) => rgba(color, 1)),
        hoverBorderColor: colors.map((color: number[]) => rgba(color, 1))
    };
}

export function getRandomColor(): number[] {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}


/**
* @method Generate colors for line|bar charts
* @param index he index of the default color array. eg. 0, 1
* @return number[]
* @author vincent 2019-01-22
* @version 0.0.0
* @example
* @log 1. vincent,2019-01-22,done
*/
export function generateColor(index: number): number[] {
    return DefaultColors[index] || getRandomColor();
}


/**
* @method Generate colors for pie|doughnut charts
* @param count Length of data. eg. datasets.data.length
* @return number[][]
* @author vincent 2019-01-22
* @version 0.0.0
* @example
* @log 1. vincent,2019-01-22,done
*/
export function generateColors(count: number): number[][] {
    const colorsArr: number[][] = new Array(count);
    for (let i = 0; i < count; i++) {
        colorsArr[i] = DefaultColors[i] || getRandomColor();
    }
    return colorsArr;
}


/**
* @method Generate colors by chart type
* @param chartType The type of chart you are using. eg. line,bar
* @param index The index of the default color array. eg. DefaultColors[index]
* @param count Length of data. eg. datasets.data.length
* @return Color or number[]
* @author vincent 2019-01-22
* @version 0.0.0
* @example
* @log 1. vincent,2019-01-22,done
*/
export function getColors(chartType: string, index: number, count: number): Color | number[] {
    if (chartType === 'pie' || chartType === 'doughnut') {
        const color = formatPieColors(generateColors(count));
        console.log(color);
        return color;
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
