import React from 'react';

import {ZoomWeb as ZoomWebComponent} from '../ZoomWeb';

export default {
  title: 'core/ZoomWeb',
  component: ZoomWebComponent
};

const API_KEY = process.env.API_KEY || '';
const API_SECRET = process.env.API_SECRET || '';

const config = {
  meetingNumber: 123456789,
  userName: 'Salman',
  userEmail: '',
  passWord: '',
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  leaveUrl: 'https://www.zoom.us', //required
  role: 0 // 0 for guest, 1 for host
};

export const ZoomWeb = (args: JSX.IntrinsicAttributes) => <ZoomWebComponent config={config} {...args} />;
