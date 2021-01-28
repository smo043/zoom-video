import {ZoomMtg} from '@zoomus/websdk';

import {ZoomWebProps} from '../types';

export function joinMeeting(signature: string, meetConfig: ZoomWebProps['config']) {
  const {leaveUrl, meetingNumber, userEmail, userName, passWord, apiKey} = meetConfig;
  ZoomMtg.init({
    debug: true,
    leaveUrl,
    isSupportAV: true,
    success: function (success: any) {
      console.log('Init Success ', success);

      ZoomMtg.join({
        meetingNumber,
        userName,
        userEmail,
        passWord,
        apiKey,
        signature,

        success: (joinSuccess: any) => {
          console.log(joinSuccess);
        },

        error: (joinError: any) => {
          console.log(joinError);
        }
      });
    }
  });
}
