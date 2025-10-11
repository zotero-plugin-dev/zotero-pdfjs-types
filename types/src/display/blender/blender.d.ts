export class Blender {
    constructor(ctx: any, theme: any);
    ctx: any;
    styleCache: Map<any, any>;
    background: Color;
    foreground: Color;
    gradient: (p: any) => Color;
    dark: boolean;
    fullPageImageDetected: boolean;
    origFill: any;
    origFillRect: any;
    origStroke: any;
    origStrokeRect: any;
    origFillText: any;
    origDrawImage: any;
    origFillStyle: (val: any) => void;
    origStrokeSyle: (val: any) => void;
    interceptStyleProperty(prop: any): (val: any) => void;
    /**
     * Removes all our property definitions and method wraps on this.ctx.
     */
    unwrap(): void;
    deleteCachedImage(): void;
    updateTextStyle(args: any): void;
    getCanvasStyle(style: any, bg: any): any;
    calcStyle(color: any): any;
    getTextStyle(color: any, textBg: any, minContrast?: number): any;
    distinctColors(imageData: any, cutoffThreshold: any): number;
    averageLightness(imageData: any): number;
    getTransformedBoundingBox(ctx: any, dx: any, dy: any, dWidth: any, dHeight: any): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    customDrawImage(args: any): any;
    hasBackgrounds: boolean | undefined;
    forceInversion: boolean | undefined;
    isColorNeutral(r: any, g: any, b: any, dev: any): boolean;
    getCanvasColor(text: any, tx: any, ty: any): Color;
    cachedImage: any;
    adjustColorForVisibility(background: any, color: any): Color;
}
import Color from "./color.js";
