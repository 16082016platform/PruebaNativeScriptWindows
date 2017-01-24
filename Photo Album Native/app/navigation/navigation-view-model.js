'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "AbsoluteLayout",
    "moduleName": "components/homeView/AbsoluteLayout",
    "icon": "\ue0dd"
},
{
    "title": "StackLayout",
    "moduleName": "components/homeView/StackLayout",
    "icon": "\ue0dd"
},
{
    "title": "StackLayoutHorizontal",
    "moduleName": "components/homeView/StackLayoutHorizontal",
    "icon": "\ue0dd"
},
{
    "title": "GridLayout",
    "moduleName": "components/homeView/GridLayout",
    "icon": "\ue0dd"
},
{
    "title": "GridLayoutColumns",
    "moduleName": "components/homeView/GridLayoutColumns",
    "icon": "\ue0dd"
},
{
    "title": "WrapLayout",
    "moduleName": "components/homeView/WrapLayout",
    "icon": "\ue0dd"
},
{
    "title": "DockLayout",
    "moduleName": "components/homeView/DockLayout",
    "icon": "\ue0dd"
},
{
    "title": "DockLayoutTrue",
    "moduleName": "components/homeView/DockLayoutTrue",
    "icon": "\ue0dd"
},
{
    "title": "GridLayoutPanels",
    "moduleName": "components/homeView/GridLayoutPanels",
    "icon": "\ue0dd"
},
{
    "title": "homeView",
    "moduleName": "components/homeView/homeView",
    "icon": "\ue0dd"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;