export type CommFunc<R = any> = (...args: any[]) => R | void | Promise<R> | Promise<void>;
export type Action = () => void;
export type Action1<T> = (p1: T) => void;
export type Action2<T1, T2> = (p1: T1, p2: T2) => void;
export type Action3<T1, T2, T3> = (p1: T1, p2: T2, p3: T3) => void;
export type Action4<T1, T2, T3, T4> = (p1: T1, p2: T2, p3: T3, p4: T4) => void;
export type CommFuncT<TS, R = any> = (this: TS, ...args: any[]) => R | void;
export type Func<R> = () => R;
export type Func1<T, R> = (p1: T) => R;
export type Func2<T1, T2, R> = (p1: T1, p2: T2) => R;
export type Func3<T1, T2, T3, R> = (p1: T1, p2: T2, p3: T3) => R;
export type Func4<T1, T2, T3, T4, R> = (p1: T1, p2: T2, p3: T3, p4: T4) => R;
export type StringArrayToUnion<T extends string[]> = T[number];
export type StringArrayToInterface<T extends string[]> = {
    [K in T[number]]: K;
};
