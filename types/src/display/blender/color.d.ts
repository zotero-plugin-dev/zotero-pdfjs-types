declare class Color {
    static parseHex(str: any): any[];
    static parseRGB(str: any): any;
    static parseRGBA(str: any): any[];
    static compToHex(c: any): any;
    constructor(...args: any[]);
    _lab: any[] | undefined;
    _rgb: any;
    _hex: string | undefined;
    get hex(): string;
    get rgb(): any;
    get lab(): any[];
    get lightness(): any;
    get chroma(): number;
    get alpha(): any;
    get luminance(): number;
    _luminance: number | undefined;
    contrast(color: any): number;
    deltaE(color: any): number;
    range(color: any): (p: any) => Color;
    toHex(alpha?: number): string;
}
declare namespace Color {
    let white: Color;
}
export default Color;
