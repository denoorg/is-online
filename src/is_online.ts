import { Params, timeoutPromise, fetchData } from './utils.ts';

export function isOnline(params?: Params) {
  try {
    if (params?.timeout) {
    return timeoutPromise(params.timeout, fetchData(params));
  }
  return fetchData(params);
     
 } catch (error) {
     return false
 }
  
};
