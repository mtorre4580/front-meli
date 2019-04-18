import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Searchbox from '../../src/components/commons/searchbox/searchbox'
import { createStore } from 'redux';
import rootReducer from '../../src/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer);

const handleSubmit = e => {
    e.preventDefault();
}

storiesOf('Commons', module)
    .addDecorator(story => (
        <Provider store={store}>
            <Router>
                {story()}
            </Router>
        </Provider>
    ))
    .add('Searchbox', withInfo(`Searchbox for searching items`)(() => {
        return <Searchbox submit={handleSubmit}/>;
    }));