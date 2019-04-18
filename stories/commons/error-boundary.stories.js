import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ErrorBoundary from '../../src/components/commons/error-boundary/error-boundary';

storiesOf('Commons', module)
    .add('ErrorBoundary', withInfo(`Wrapper para manejar errores`)(() => {
        return (
            <ErrorBoundary> 
                <p>componente</p> 
            </ErrorBoundary>
        );
    }));