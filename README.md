# testcafe-demo
testcafe demo example project

```
npm install
```

tests-id01-id03.js 
01) Searches repo with name Nuxt.js  on github;
03) Open Nuxt.js repo and check topics;

```
npx testcafe firefox e2e/tests-id01-id03.js -L
```

tests-id02.js
Searches repo with name Vue.js on github;
// it must fail because no repo with name Vue.js;

```
 npx testcafe firefox e2e/tests-id02.js -L
```

tests-id02-1.js
Searches repo with name Vue.js on github but with softer and wider conditions;
It must be ok.

```
npx testcafe firefox e2e/tests-id02-1.js -L
```

// if you have no firefox type chrome in commands.
