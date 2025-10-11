export function fetchData(url: any): Promise<Uint8Array<ArrayBuffer>>;
export class NodeCanvasFactory extends BaseCanvasFactory {
    /**
     * @ignore
     */
    _createCanvas(width: any, height: any): any;
}
export class NodeCMapReaderFactory extends BaseCMapReaderFactory {
    /**
     * @ignore
     */
    _fetch(url: any): Promise<Uint8Array<ArrayBuffer>>;
}
export class NodeFilterFactory extends BaseFilterFactory {
}
export class NodeStandardFontDataFactory extends BaseStandardFontDataFactory {
    /**
     * @ignore
     */
    _fetch(url: any): Promise<Uint8Array<ArrayBuffer>>;
}
export class NodeWasmFactory extends BaseWasmFactory {
    /**
     * @ignore
     */
    _fetch(url: any): Promise<Uint8Array<ArrayBuffer>>;
}
import { BaseCanvasFactory } from "./canvas_factory.js";
import { BaseCMapReaderFactory } from "./cmap_reader_factory.js";
import { BaseFilterFactory } from "./filter_factory.js";
import { BaseStandardFontDataFactory } from "./standard_fontdata_factory.js";
import { BaseWasmFactory } from "./wasm_factory.js";
