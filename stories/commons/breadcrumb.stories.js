import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Breadcrumb from '../../src/components/commons/breadcrumb/breadcrumb';

const categories = [
    'Electrónica, Audio y Video',
    'Audio',
    'Reproductores Portátiles',
    'iPod',
    'iPod touch',
    '32 GB'
];

storiesOf('Commons', module)
    .add('Breadcrumb', withInfo(`Breadcrumb del item`)(() => {
        return <Breadcrumb categories={categories} />
    }));