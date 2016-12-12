import * as React from 'react';
import * as ReactDOM from 'react-dom';

import "react-toolbox/lib/animations/index";
import "react-toolbox/lib/app_bar/index";
import "react-toolbox/lib/autocomplete/index";
import "react-toolbox/lib/avatar/index";
import "react-toolbox/lib/button/index";
import "react-toolbox/lib/card/index";
import "react-toolbox/lib/checkbox/index";
import "react-toolbox/lib/chip/index";
import "react-toolbox/lib/date_picker/index";
import "react-toolbox/lib/dialog/index";
import "react-toolbox/lib/drawer/index";
import "react-toolbox/lib/dropdown/index";
import "react-toolbox/lib/font_icon/index";
import "react-toolbox/lib/form/index";
import "react-toolbox/lib/hoc/Portal";
import "react-toolbox/lib/hoc/ActivableRenderer";
import "react-toolbox/lib/input/index";
import "react-toolbox/lib/layout/index";
import "react-toolbox/lib/link/index";
import "react-toolbox/lib/list/index";
import "react-toolbox/lib/menu/index";
import "react-toolbox/lib/navigation/index";
import "react-toolbox/lib/overlay/index";
import "react-toolbox/lib/progress_bar/index";
import "react-toolbox/lib/radio/index";
import "react-toolbox/lib/ripple/index";
import "react-toolbox/lib/slider/index";
import "react-toolbox/lib/snackbar/index";
import "react-toolbox/lib/switch/index";
import "react-toolbox/lib/tabs/index";
import "react-toolbox/lib/table/index";
import "react-toolbox/lib/time_picker/index";
import "react-toolbox/lib/tooltip/index"; 

const startWebPackIdx = 159; const endWebPackIdx = 190;

declare var __webpack_require__: (id: number) => {};
const basicPath = 'node_modules-react-toolbox-lib-';
var res: { [id: string]: {} } = {};
var resNew: { [id: string]: {} } = {};
for (let i = startWebPackIdx; i <= endWebPackIdx; i++) {
  let x = __webpack_require__(i) as any;
  let path = '';
  for (let p in x) {
    let line = x[p] as string;
    if (line.indexOf(basicPath) != 0) { debugger; console.log(line); }
    let parts = line.substr(basicPath.length).split('-');
    path = `${parts[0]}/${parts[1]}`;
    switch (parts.length) {
      case 3: break;
      case 4: path = path + '-' + parts[2]; break;
      default: debugger; console.log(line); break;
    }
    break;
  }
  for (let p in x) x[p] = (x[p] as string).replace('node_modules-react-toolbox-lib-', 'rt-');

  res[path] = x;
  const firstUpper = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  if (path.indexOf('/theme') > 0) {
    const id = path.substr(0, path.length - 6);
    const parts = id.split('_');
    for (let i = 0; i < parts.length; i++) parts[i] = firstUpper(parts[i]);
    resNew['RT' + parts.join('')] = x;
  }
}
let json = JSON.stringify(res); //d:\rw\design-rt\class-map.json
debugger;
json = JSON.stringify(resNew); //d:\rw\design-rt\class-map-new.json
debugger;

//ReactDOM.render(<h1>Hallo World</h1>, document.createElement('content'));