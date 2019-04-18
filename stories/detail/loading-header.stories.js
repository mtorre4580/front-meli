import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import LoadingHeader from '../../src/components/detail/loading-header/loading-header';

storiesOf('Detail', module)
    .add('LoadingHeader', withInfo(`Loader para el encabezado en detalle`)(() => {
        return <LoadingHeader />;
    }));