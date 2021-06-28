# ts-loader 와 craco 적용

# eject 안하고 webpack 설정 변경

# npm install ts-loader@8.2.0

- 9버젼은 현재 webpack5랑 호환성 이슈가 좀 있는듯

#

https://blog.johnnyreilly.com/2021/01/02/create-react-app-with-ts-loader-and-craco/

# craco

https://tigger.dev/entry/React-CRA-Typescript-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-Module-Alias-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

## craco & craco-alias & ts-loader 라이브러리 설치

npm install @craco/craco
npm install -D craco-alias
npm install ts-loader@8.2.0

출처: https://tigger.dev/entry/React-CRA-Typescript-환경에서-Module-Alias-설정하기 [개발 여행]

## tsconfig.paths.json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@src/*": ["src/*"], "@components/*": ["src/components/*"] }
  }
}

```

## craco.config.js

```
const CracoAlias = require('craco-alias');
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.paths.json',
        debug: false,
      },
    },
  ],
};

```

## tsconfig.json

```
const CracoAlias = require('craco-alias');
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.paths.json',
        debug: false,
      },
    },
  ],
};

```

## package.json

```
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

<!-- npm install loader-utils@latest

npm install sass-loader

npm uninstall less-loader -->

<!-- # npm install less@3.9.0 less-loader@5.0.0 -s -->

<!-- npm install less-loader@5.0.0 -->

https://hyperconnect.github.io/2020/12/14/typescript-build-optimization.html

# 웹팩 설정

https://luavis.me/web/speed-up-webpack

# UnhandledPromiseRejectionWarning: Error: Cannot find module 'react-scripts/package.json'

npm i react-scripts
