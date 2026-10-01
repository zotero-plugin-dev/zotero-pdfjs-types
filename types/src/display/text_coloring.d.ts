export class TextColoring {
    constructor(graphics: any, regions: any, background: any);
    graphics: any;
    context: any;
    transform: any[];
    regions: Map<any, any>;
    get coloredRegions(): any[];
    recordImage(x: any, y: any, width: any, height: any): void;
    recordPaint(bounds: any, style?: null, transform?: null, ctx?: any): void;
    matchRegion(transform: any, x: any, y: any, canColor: any): any;
    beginText(glyphs: any): this | null;
    getTextTransform(): any[] | null;
    canColorText(font: any, fontDirection: any): boolean;
}
