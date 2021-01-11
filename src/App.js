import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';


class App extends Component {
  @tracked planets = [];

  constructor() {
    super(...arguments);
    (async () => {
      const response = await fetch('https://www.swapi.tech/api/planets/');
      const data = await response.json();
      this.planets = data.results;
    })();
  }
  
}


setComponentTemplate(
  createTemplate(
    {  },
    `
    <div class="grid">
  <div class="left-panel">
  <ul class="list">
  {{#each this.planets as |p|}}
  <li><a href="/planets">{{p.name}}</a></li>
  {{/each}}
  </ul>
  </div>
  <div class="right-panel">
  </div>
</div>
    `
  ),
  App
);

export default App;
