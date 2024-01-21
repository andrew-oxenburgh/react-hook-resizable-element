import { useEffect } from 'react';
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
export function UseResizeElementError(msg) {
    return new Error(`Error in useResizeElement: ${msg}`);
}
/**
 * @type {ResizeElementOptions}
 * @defaultValue
 */
const defaultOptions = {
    min: 0,
    max: 1000,
    gapAtBottom: 0,
};
/**
 * throws error if input is null or undefined.
 * @param {unknown} v - should not be null or undefined
 * @param {string} msg
 * @throws {UseResizeElementError}
 * @returns void
 */
export function isNullThrowError(v, msg) {
    // is v null or undefined
    if (v == null) {
        throw UseResizeElementError(msg);
        // return
    }
}
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
export function throwErrorIfElementIsInvalid(eleRef) {
    var _a, _b, _c;
    isNullThrowError(eleRef, 'eleRef is null');
    isNullThrowError(eleRef.current, 'eleRef.current is null');
    isNullThrowError((_a = eleRef === null || eleRef === void 0 ? void 0 : eleRef.current) === null || _a === void 0 ? void 0 : _a.style, "eleRef doesn't have a style property");
    isNullThrowError((_b = eleRef === null || eleRef === void 0 ? void 0 : eleRef.current) === null || _b === void 0 ? void 0 : _b.style.height, "eleRef doesn't have a style.height property");
    isNullThrowError((_c = eleRef === null || eleRef === void 0 ? void 0 : eleRef.current) === null || _c === void 0 ? void 0 : _c.scrollHeight, "eleRef doesn't have a scrollHeight property");
}
/**
 * Calculates the desired height of the element based on the scrollHeight and the options.
 * @param {number} scrollHeight - The scrollHeight of the element.
 * @param {ResizeElementOptions} opts - The options for the resize element.
 * @returns {string} The desired height of the element in pixels.
 */
export function findDesiredHeightInPixels(scrollHeight, opts) {
    let desiredHeight = Math.max(scrollHeight, opts.min);
    desiredHeight = Math.min(desiredHeight, opts.max);
    desiredHeight += opts.gapAtBottom;
    return `${desiredHeight}px`;
}
/**
 * @function useResizeElement
 * @param {MutableRefObject<ResizableElementShape>} eleRef
 * @param {ResizeElementOptions} opts
 */
export function resizeElement(eleRef, calcHeight, opts) {
    // gate keeper
    throwErrorIfElementIsInvalid(eleRef);
    const ele = eleRef.current;
    // Just get bits I need
    resizeElementPostValidation(ele, calcHeight, opts);
}
export function resizeElementPostValidation(ele, calcHeight, opts = defaultOptions) {
    ele.style.height = '0px';
    // get the scrollHeight`
    const newHeight = ele.scrollHeight;
    // set bounds and add gapAtBottom
    // set height
    ele.style.height = calcHeight(newHeight, opts);
}
/**
 * @param {MutableRefObject<ResizableElementShape>} ele
 * @param {DependencyList} deps - what to watch.
 * @param {ResizeElementOptions} [options]
 */
export function useResizeElement(ele, deps, options = defaultOptions) {
    useEffect(() => {
        resizeElement(ele, findDesiredHeightInPixels, options);
    }, deps);
}
export default useResizeElement;
//# sourceMappingURL=useResizeElement.js.map