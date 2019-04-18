import { configure } from '@storybook/react';
import '../src/App.scss';

// Configuration for get all stories components in stories folder (=
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
