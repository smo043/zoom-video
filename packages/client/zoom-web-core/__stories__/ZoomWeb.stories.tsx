import React from 'react';

import {ZoomWeb as ZoomWebComponent} from '../ZoomWeb';

export default {
  title: 'core/ZoomWeb',
  component: ZoomWebComponent
};

const API_KEY = process.env.API_KEY || '';
const API_SECRET = process.env.API_SECRET || '';

const API_KEYS = {
  apiKey: API_KEY,
  apiSecret: API_SECRET
};

console.log('API_KEYS ::', API_KEYS);

const config = {
  apiKey: API_KEYS.apiKey, // can create from here https://marketplace.zoom.us/
  apiSecret: API_KEYS.apiSecret, // can create from here https://marketplace.zoom.us/
  meetingNumber: '123456789',
  leaveUrl: 'https://zoom.us/',
  userName: 'Salman', // (required)
  userEmail: '', // (optional) must be the attendee email address
  passWord: '',
  // !!warning, this is the passcode for meeting room, not for user password
  role: 0 // 0 for guest, 1 for host
};

export const ZoomWeb = (args: JSX.IntrinsicAttributes) => <ZoomWebComponent {...args} />;

ZoomWeb.args = {
  config
};
