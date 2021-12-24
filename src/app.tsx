import route from './data/route';
import React from 'react';

// modifyClientRenderOpts
let isSubApp = false;
export function modifyClientRenderOpts(memo: any) {
  console.log(memo);
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,
  };
}

// patchRoutes
let extraRoutes: Record<string, any>;
export function patchRoutes({ routes }: Record<string, any>) {
  console.log(routes);
  routes.unshift(extraRoutes);
}

// render
export function render(oldRender: Function) {
  // fetch('./data/route.json').then(res=>res.json()).then((res) => {
  //   console.log(res)
  //   extraRoutes = route;
  //   oldRender();
  // })
  console.log(route);
  extraRoutes = route;
  oldRender();
}

// onRouteChange
export function onRouteChange({ matchedRoutes }: Record<string, any>) {
  const len = matchedRoutes.length;
  if (len) {
    const path = matchedRoutes[len - 1].route.path.slice(1);
    document.title = path || 'home';
  }
}

// rootContainer
export function rootContainer(container: any) {
  return React.createElement('div', { style: { color: '#999999' } }, container);
}
