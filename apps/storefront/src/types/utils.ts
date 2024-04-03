// reference: https://stackoverflow.com/a/74049208

const NotNullSymbol = Symbol("not null");
export type NotNull = typeof NotNullSymbol;

type RemoveNotNullTypes<T> = T extends NotNull
    ? unknown
    : T extends object
      ? { [K in keyof T]: RemoveNotNullTypes<T[K]> }
      : T;

type _Overwrite<T, U> = U extends NotNull
    ? Exclude<T, null>
    : U extends object
      ? {
            [K in keyof T]: K extends keyof U ? _Overwrite<T[K], U[K]> : T[K];
        } & RemoveNotNullTypes<U>
      : U;

type ExpandRecursively<T> = T extends Function
    ? T
    : T extends object
      ? T extends infer O
          ? { [K in keyof O]: ExpandRecursively<O[K]> }
          : never
      : T;

export type Overwrite<T, U> = ExpandRecursively<_Overwrite<T, U>>;
