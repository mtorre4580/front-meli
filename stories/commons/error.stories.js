import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { BrowserRouter as Router } from 'react-router-dom';
import Error from '../../src/components/commons/error/error';

const title = 'Se produjo un error';
const content = 'No se pudieron obtener resultados';

storiesOf('Commons', module)
    .add('Error', withInfo(`Condición del item`)(() => {
        return (
            <Router>
                <Error title={title} content={content} />
            </Router>
        );
    }));