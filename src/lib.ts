import { mapStyles } from './util/style';

import styleMap from './lib.module.scss';
const styles = mapStyles(styleMap);

export const libMain = () => {
  const rootElement = document.getElementById('root');
  if (rootElement === null) {
    throw new Error('Expected element with id="root" to be found.')
  }

  const element = document.createElement('span');
  element.setAttribute('class', styles('styled-span'));
  element.innerText = "Hello, world";

  document.getElementsByTagName('body')[0].setAttribute('class', 'body');

  rootElement.appendChild(element);
};