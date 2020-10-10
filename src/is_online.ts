import { Params, timeoutPromise, fetchData } from './utils.ts';

export function isOnline(params?: Params) {
  if (params?.timeout) {
    return timeoutPromise(params.timeout, fetchData(params));
  }
  return fetchData(params);
};
