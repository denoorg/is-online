# is_online

Check if the internet connection is up in Deno.

## 🔧 How to use

```js
import { isOnline } from 'https://deno.land/x/is_online@v0.1.0/mod.ts';
```

## 💡 Usage

```ts
import { isOnline } from 'https://deno.land/x/is_online@v0.1.0/mod.ts';

(async () => {
  console.log(await isOnline());
  // true

  console.log(await isOnline({ timeout: 5000 }));
  // true
})();
```

## 📜 Changelog

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/DenoOrg/is-online/blob/main/CHANGELOG.md).

## ❗ Issues

If you think any of the `is_online` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 💪 Contribution

We'd love to have your helping hand on contributions to `is_online` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
