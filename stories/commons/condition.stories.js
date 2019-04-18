import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Condition from '../../src/components/commons/condition/condition';

const condition = 'new';
const sold_quantity = 30;

storiesOf('Commons', module)
    .add('Condition', withInfo(`Condición del item`)(() => {
        return <Condition condition={condition} sold_quantity={sold_quantity} />;
    }));