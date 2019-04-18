import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SearchForm from '../../src/components/commons/searchform/searchform'
import { createStore } from 'redux';
import rootReducer from '../../src/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const handleSubmit = e => {
    e.preventDefault();
}

storiesOf('Commons', module)
    .addDecorator(story => 
        <Provider store={store}>
            {story()}
        </Provider>
    )
    .add('SearchForm', withInfo(`Form search with redux-form`)(() => {
        return <SearchForm placeholder='Nunca dejes de buscar' handleSubmit={handleSubmit}/>;
    }));