import { ValueState } from "../state";
import { FilterBasedAccessor } from "./FilterBasedAccessor";
export interface RangeOption {
    title: string;
    from?: number;
    to?: number;
}
export interface NumericOptions {
    field: string;
    title: string;
    options: Array<RangeOption>;
    id: string;
}
export declare class NumericOptionsAccessor extends FilterBasedAccessor<ValueState> {
    state: ValueState;
    options: NumericOptions;
    constructor(key: any, options: NumericOptions);
    getBuckets(): any;
    buildSharedQuery(query: any): any;
    getRanges(): {
        key: string;
        from: number;
        to: number;
    }[];
    buildOwnQuery(query: any): any;
}
