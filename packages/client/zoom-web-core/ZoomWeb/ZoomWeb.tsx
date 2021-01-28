import React, {FC, useEffect} from 'react';
import {ZoomMtg} from '@zoomus/websdk';

import {joinMeeting} from '../joinMeeting';
import {ZoomWebProps} from '../types';

export const ZoomWeb: FC<ZoomWebProps> = (props) => {
  const {config} = props;
  debugger;
  useEffect(() => {
    // setZoomJSLib version 1.8.1 caused breaking, must be same as installed package verision
    // installing this of version 1.7.x caused breaking
    ZoomMtg.setZoomJSLib('https://source.zoom.us/1.8.1/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    ZoomMtg.generateSignature({
      meetingNumber: config.meetingNumber,
      apiKey: config.apiKey,
      apiSecret: config.apiSecret,

      role: config.role,
      success: function (res: {result: any}) {
        console.log('res', res);

        setTimeout(() => {
          joinMeeting(res.result, config);
        }, 1000);
      }
    });
  }, [config]);

  return <></>;
};
