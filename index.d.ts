declare module "deep-assign"
{
    function deepAssign<T, S>(target: T, source: S): T & S;
    function deepAssign<T, S1, S2>(target: T, source1: S1, source2: S2): T & S1 & S2;
    function deepAssign<T, S1, S2, S3>(target: T, source1: S1, source2: S2, source3: S3): T & S1 & S2 & S3;
    function deepAssign<T, S1, S2, S3, S4>(target: T, source1: S1, source2: S2, source3: S3, source4: S4): T & S1 & S2 & S3 & S4;
    function deepAssign<T, S1, S2, S3, S4, S5>(target: T, source1: S1, source2: S2, source3: S3, source4: S4, source5: S5): T & S1 & S2 & S3 & S4 & S5;
    function deepAssign<T, S1, S2, S3, S4, S5, S6>(target: T, source1: S1, source2: S2, source3: S3, source4: S4, source5: S5, source6: S6): T & S1 & S2 & S3 & S4 & S5 & S6;
    function deepAssign(target: any, ...sources: any[]): any;

    export = deepAssign;
}