import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Application} from './src/Application';

ReactDOM.render(<Application />,
	document.getElementById('content'));

import { AppBar } from "react-toolbox/lib/app_bar";
import { Autocomplete } from "react-toolbox/lib/autocomplete";
import { Avatar } from "react-toolbox/lib/avatar";
import { Button, IconButton } from "react-toolbox/lib/button";
import { Card, CardTitle, CardMedia, CardText, CardActions } from "react-toolbox/lib/card";
import { Checkbox } from "react-toolbox/lib/checkbox";
import { Chip } from "react-toolbox/lib/chip";
import { DatePicker } from "react-toolbox/lib/date_picker";
import { Dialog } from "react-toolbox/lib/dialog";
import { Drawer } from "react-toolbox/lib/drawer";
import { Dropdown } from "react-toolbox/lib/dropdown";
import { FontIcon } from "react-toolbox/lib/font_icon";
import { Input } from "react-toolbox/lib/input";
import { Layout, Panel, NavDrawer, Sidebar } from "react-toolbox/lib/layout";
import { Link } from "react-toolbox/lib/link";
import { List, ListCheckbox, ListItem, ListDivider, ListSubHeader } from "react-toolbox/lib/list";
import { Menu, MenuDivider, MenuItem, IconMenu } from "react-toolbox/lib/menu";
import { Navigation } from "react-toolbox/lib/navigation";
import { ProgressBar } from "react-toolbox/lib/progress_bar";
import { RadioGroup, RadioButton } from "react-toolbox/lib/radio";
import { Ripple } from "react-toolbox/lib/ripple";
import { Slider } from "react-toolbox/lib/slider";
import { Snackbar } from "react-toolbox/lib/snackbar";
import { Switch } from "react-toolbox/lib/switch";
import { Tabs, Tab } from "react-toolbox/lib/tabs";
import { Table } from "react-toolbox/lib/table";
import { TimePicker } from "react-toolbox/lib/time_picker";
import { Tooltip } from "react-toolbox/lib/tooltip"; 

const startWebPackIdx = 150; const endWebPackIdx = 182;

declare var __webpack_require__: (id: number) => {};
const basicPath = 'node_modules-react-toolbox-lib-';
var res: { [id: string]: {}} = {};
for (let i = startWebPackIdx; i <= endWebPackIdx; i++) {
  let x = __webpack_require__(i) as Object;
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
  res[path] = x;
}
let json = JSON.stringify(res);

debugger;

export {
  AppBar,
  Autocomplete,
  Avatar,
  Button, IconButton,
  Card, CardTitle, CardMedia, CardText, CardActions,
  Checkbox,
  Chip,
  DatePicker,
  Dialog,
  Drawer,
  Dropdown,
  FontIcon,
  Input,
  Layout, Panel, NavDrawer, Sidebar,
  Link,
  List, ListCheckbox, ListItem, ListDivider, ListSubHeader,
  Menu, MenuDivider, MenuItem, IconMenu,
  Navigation,
  ProgressBar,
  RadioGroup, RadioButton,
  Ripple,
  Slider,
  Snackbar,
  Switch,
  Table,
  Tabs, Tab,
  TimePicker,
  Tooltip }
