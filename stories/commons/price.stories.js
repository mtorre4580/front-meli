import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Price from '../../src/components/commons/price/price'

const value = {
    currency: 'BR',
    amount: 400
};

storiesOf('Commons', module)
    .add('Price', withInfo(`Precio del item`)(() => {
        return <Price value={value} />;
    }));