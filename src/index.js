import { renderComponent } from '@glimmer/core';
import App from './App.js';
import singleSpaGlimmer from './single-spa-glimmer.js';

//const element = document.getElementById('single-spa-application:@glimmer-mf/planets');
const root = 'single-spa-application:@glimmer-mf/planets';

const glimmerLifecycles = singleSpaGlimmer({
  App,
  renderComponent,
  root,
});

export const bootstrap = glimmerLifecycles.bootstrap;
export const mount = glimmerLifecycles.mount;
export const unmount = glimmerLifecycles.unmount;


