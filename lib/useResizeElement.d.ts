import { MutableRefObject, DependencyList } from 'react';
/**
 * A react custom hook that will resize a text element based on the height of the text.
 * @example
 * const ref = useRef();
 * useResizeElement(ref, { min: 100, max: 500, gapAtBottom: 10 });
 * <textarea ref={ref}></textarea>
 * @example
 * const ref = useRef();
 * useResizeElement(ref);
 * <textarea ref={ref}></textarea>
 */
/**
 * Creates an Error, ready to be thrown.
 * @param {string} msg
 * @returns {Error}
 */
export declare function UseResizeElementError(msg: string): Error;
/**
 * This is what we need the Element to have for this to work.
 */
export type ResizableElementShape = {
    scrollHeight: number;
    style: {
        height: string;
    };
};
/**
 * Options that may passed to useResizeElement.
 */
export type ResizeElementOptions = {
    min: number;
    max: number;
    gapAtBottom: number;
};
/**
 * throws error if input is null or undefined.
 * @param {unknown} v - should not be null or undefined
 * @param {string} msg
 * @throws {UseResizeElementError}
 * @returns void
 */
export declare function isNullThrowError(v: unknown, msg: string): void;
/**
 * If any of the conditions fail, this throws an Error
 * The ref must:
 * 1. exist
 * 2. be a mutable ref object
 * 3. be initialised to an HTMLElent
 * 4. have a "style" property
 * 5. have a "style.height" property
 * 6. have a "scrollHeight" property
 * @param {MutableRefObject<ResizableElementShape>} eleRef
 * @returns void if successful
 * @throws {Error} if element is invalid
 */
export declare function throwErrorIfElementIsInvalid(eleRef: MutableRefObject<ResizableElementShape | null>): void;
/**
 * Calculates the desired height of the element based on the scrollHeight and the options.
 * @param {number} scrollHeight - The scrollHeight of the element.
 * @param {ResizeElementOptions} opts - The options for the resize element.
 * @returns {string} The desired height of the element in pixels.
 */
export declare function findDesiredHeightInPixels(scrollHeight: number, opts: ResizeElementOptions): string;
/**
 * @function useResizeElement
 * @param {MutableRefObject<ResizableElementShape>} eleRef
 * @param {ResizeElementOptions} opts
 */
export declare function resizeElement(eleRef: MutableRefObject<ResizableElementShape | null>, calcHeight: (scrollHeight: number, opts: ResizeElementOptions) => string, opts: ResizeElementOptions): void;
export declare function resizeElementPostValidation(ele: ResizableElementShape, calcHeight: (scrollHeight: number, opts: ResizeElementOptions) => string, opts?: ResizeElementOptions): void;
/**
 * @param {MutableRefObject<ResizableElementShape>} ele
 * @param {DependencyList} deps - what to watch.
 * @param {ResizeElementOptions} [options]
 */
export declare function useResizeElement(ele: MutableRefObject<ResizableElementShape | null>, deps: DependencyList, options?: ResizeElementOptions): void;
export default useResizeElement;
//# sourceMappingURL=useResizeElement.d.ts.map