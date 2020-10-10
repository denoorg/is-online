export function timeoutPromise(
  ms: number,
  promise: Promise<boolean>,
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      resolve(false);
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        resolve(false);
      },
    );
  });
}

export interface Params {
  timeout?: number;
}

export async function fetchData(params?: Params): Promise<boolean> {
  const text = await (
    await (
      await fetch('http://captive.apple.com/hotspot-detect.html', {
        headers: {
          'User-Agent': 'CaptiveNetworkSupport/1.0 wispr',
        },
      })
    ).blob()
  ).text();
  return (text ?? '').toLowerCase().includes('success');
}
