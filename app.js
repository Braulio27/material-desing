import {MDCRipple} from '@material/ripple/index';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCList} from "@material/list";

const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});
const ripple = new MDCRipple(document.querySelector('.foo-button'));

//TextField
import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));