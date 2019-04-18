import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import LoadingResults from '../../src/components/results/loading-results/loading-results';

storiesOf('Results', module)
    .add('LoadingResults', withInfo(`Loader para resultados`)(() => {
        return <LoadingResults />;
    }));