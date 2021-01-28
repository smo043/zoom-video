import React, {FC, useEffect} from 'react';
import {ZoomMtg} from '@zoomus/websdk';

import {joinMeeting} from '../joinMeeting';
import {ZoomWebProps} from '../types';
import {useSignature} from '../hooks';

export const ZoomWeb: FC<ZoomWebProps> = (props) => {
  const {config} = props;
  const [signature] = useSignature(config);

  useEffect(() => {
    if (signature) {
      ZoomMtg.setZoomJSLib('https://source.zoom.us/1.8.6/lib', '/av');
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareJssdk();

      setTimeout(() => joinMeeting(signature, config), 1000);
    }
  }, [config, signature]);

  return <></>;
};
