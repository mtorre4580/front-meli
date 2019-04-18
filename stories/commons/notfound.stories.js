import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NotFound from '../../src/components/commons/notfound/notfound';
import { BrowserRouter as Router } from 'react-router-dom';

storiesOf('Commons', module)
    .add('NotFound', withInfo(`No encontrado`)(() => {
        return (
            <Router>
                <NotFound />
            </Router>
        );
    }));