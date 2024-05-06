export namespace Enumify {
    export type ValuesOfArray<T extends ReadonlyArray<any>> = T[number]

    export type ToObj<K extends string> = {
        [P in K]: P
    }

    /**
     * Generates a enum (like an object) with keys and values based on the elements of an array.
     * @template T - The type of the array elements.
     * @template K - The type of the keys in the generated object.
     * @param {T} arr - The array of elements.
     * @param {boolean} [allowNumber] - Whether to allow numbers as keys in the generated object.
     * @param {number} [start] - The starting value for numbering the keys.
     * @param {number} [convention] - The convention to apply when numbering the keys.
     * @returns {Readonly<ToObj<K>>} - An object with keys and values based on the elements of the array.
     * 
     * Examples:  
     * - `generate(["A", "B", "C"])` returns `{"A": "A", "B": "B", "C": "C"} `
                 - `generate(["A", "B", "C"], true)` returns `{"A": 0, "B": 1, "C": 2}` 
                 - `generate(["A", "B", "C"], true, 1)` returns `{"A": 1, "B": 2, "C": 3}` 
                 - `generate(["A", "B", "C"], true, 1, 2000)` returns `{"A": 2001, "B": 2002, "C": 2003}` 
     */

    export const generate = <T extends readonly any[], K extends ValuesOfArray<T>>(
        arr: T,
        allowNumber?: boolean,
        start?: number,
        convention?: number
    ): Readonly<ToObj<K>> => {
        if (allowNumber)
            return arr.reduce((acc, elem, idx) => {
                return {
                    ...acc,
                    [elem]: idx + (start ?? 0) + (convention ?? 0),
                }
            }, {})
        return arr.reduce((acc, elem) => {
            return {
                ...acc,
                [elem]: elem,
            }
        }, {})
    }
}
