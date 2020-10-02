export type Arg<T> = T extends (arg: infer T) => any ? T : never;

export type Arr = [(arg) => any, ...Array<(arg) => any>];

export type LastIndexOf<T extends any[]> = ((...x: T) => void) extends (
  y: any,
  ...z: infer U
) => void
  ? U['length']
  : never;

export type ThenArg<T, T2> = T extends PromiseLike<infer U> ? Promise<T2> : T;

type Func1 = (arg: any) => any;

type Tail<T extends any[]> = ((...t: T) => void) extends (
  x: any,
  ...u: infer U
) => void
  ? U
  : never;

export type Chain<
  T extends [Func1, ...Func1[]],
  G extends Func1[] = Tail<T>
> = {
  [K in keyof T]: (
    arg: MaybePromise<Arg<T[K]>>
  ) => MaybePromise<Arg<Lookup<G, K, any>>>;
};

type Lookup<T, K extends keyof any, Else = never> = K extends keyof T
  ? T[K]
  : Else;

export type MaybePromise<T> = Promise<T> | T;

export function flow<T extends Arr>(...fns: T & Chain<T>) {
  return function (
    arg: MaybePromise<Arg<T[0]>>
  ): ThenArg<ReturnType<T[0]>, ReturnType<T[LastIndexOf<T>]>> {
    return fns.reduce(async (v, f) => f(await v), arg) as any;
  };
}
