## design-rt

git clone https://github.com/PavelPZ/design-rt

npm install

npm install --save @types/react

npm install --save @types/react-dom

npm install --save @types/lodash

npm run build

look into dist/build/app.js and find first and last "// removed by extract-text-webpack-plugin" string. 
Start and End module ID put to index.tsx (const startWebPackIdx = 150; const endWebPackIdx = 182;)

npm run build again

run index.html in Chrome debugger, copy *json* var value to class-map.json

modify dist/build/toolbox.css by https://autoprefixer.github.io/

replace "node_modules-react-toolbox-lib-" by "rt-" in both class-map.json and dist/build/toolbox.css

# Update: 
- npm rebuild
- npm update

# modify RT sources:
- all JS files from D:\rw\design-rt\node_modules\react-toolbox\lib\ to d:\rw\design\rt\react-toolbox\
- find JS files with *.scss'* string
- in vs.net: replace *.scss'* by *.js'*
- in *d:\rw\design\rt* dir run *node node-cmd.js --harmony* command: *theme.js* will be added
- copy *d:\rw\design\rt\lib\* to e.g. *d:\rw\rw-app\jspm_packages\npm\react-toolbox@1.2.5\lib\*