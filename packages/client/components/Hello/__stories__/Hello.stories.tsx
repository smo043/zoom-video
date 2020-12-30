import React from 'react';

import {Hello} from '../Hello';

export default {
  title: 'Example/Hello',
  component: Hello
};

export const Template = (args: JSX.IntrinsicAttributes) => <Hello {...args} />;
