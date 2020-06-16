export type IS_MODULE = unique symbol;
export type IS_FUNCTION = unique symbol;
export type NONE = false;
export declare const result_types: Readonly<{
    IS_MODULE: IS_MODULE;
    IS_FUNCTION: IS_FUNCTION;
    NONE: NONE;
}>;
export declare function isThatThis(value: any): IS_MODULE | IS_FUNCTION | NONE;
