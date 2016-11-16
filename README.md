# design-rt

download and unzip 

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
