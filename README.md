## design-rt

POSTUP PRIPRAVY d:\rw\design-rt\class-map-new.json


/*
git clone https://github.com/PavelPZ/design-rt

npm install

npm install --save @types/react

npm install --save @types/react-dom

npm install --save @types/lodash*/

npm rebuild

npm update

================
1. npm run build

2. look into dist/build/app.js and find first and last "// removed by extract-text-webpack-plugin" string. 
Start and End module ID put to index.tsx (const startWebPackIdx = 150; const endWebPackIdx = 182;)

3. npm run build again

4. run d:\rw\design-rt\dist\index.html in Chrome debugger, copy *json* var value to d:\rw\design-rt\class-map-new.json

5. modify dist/build/toolbox.css by https://autoprefixer.github.io/

6. replace "node_modules-react-toolbox-lib-" by "rt-" in dist/build/toolbox.css
=================

Naledujic modifikace JS neni potreba, protoze se pouzivaji RAW ReactToolbox komponenty z d:\rw\rw\typings\react-toolbox\index.d.ts, tj napr.
  react-toolbox/lib/button/Button
misto
  react-toolbox/lib/button/index

/*# modify RT sources:
- all JS files from D:\rw\design-rt\node_modules\react-toolbox\lib\ to d:\rw\design\rt\react-toolbox\
- find JS files with *.scss'* string
- in vs.net: replace *.scss'* by *.json'*
- in *d:\rw\design\rt* dir run *node node-cmd.js --harmony* command: *theme.js* will be added
- copy *d:\rw\design\rt\lib\* to e.g. *d:\rw\rw-app\jspm_packages\npm\react-toolbox@1.2.5\lib\*
*/