import {useEffect, useState} from 'react';
import axios from 'axios';
import {ZoomWebProps} from '../types';

export async function getSignature(config: ZoomWebProps['config']) {
  const {meetingNumber, role} = config;
  const response = await axios
    .post(
      'http://localhost:4000/web-signature',
      {
        meetingNumber: meetingNumber,
        role: role
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .catch((e) => e);

  return response.data;
}

export const useSignature = (config: ZoomWebProps['config']) => {
  const [signature, setSignature] = useState('');

  useEffect(() => {
    async function fetchSignature() {
      const response = await getSignature(config);

      return setSignature(response.signature);
    }
    fetchSignature();
  }, []);

  return [signature];
};
