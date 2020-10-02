import { Arr, Chain, MaybePromise, Arg, ThenArg, LastIndexOf } from './flow';
import { flatten } from './flatten';

export function parallel<T extends Arr>(...fns: T & Chain<T>) {
  return function (
    arg: MaybePromise<Arg<T[0]>>
  ): ThenArg<ReturnType<T[0]>, ReturnType<T[LastIndexOf<T>]>> {
    return Promise.all(fns.map(fn => fn(arg))).then(e => {
      return flatten(e);
    }) as any;
  };
}
