import ReactDOM from 'react-dom';

import type { IComponent } from '@types';

const portalRoot = document.getElementById('portal-root');

export const Portal: IComponent = ({ children }) => {
  return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
};
