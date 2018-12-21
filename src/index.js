import '../css/index.css'
import _ from 'lodash'
import src from '../img/20181221160946.png'
import json from '../data/data'
import xlsx from '../data/1.xlsx'
function component() {
  // var element = document.createElement('div')
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  var myIcon = new Image();
   myIcon.src = src;
  return myIcon
}
console.log(component())
document.body.appendChild(component())
console.log(xlsx)
// import MyImage from '../img/20181221160946.png'
// console.log(MyImage)