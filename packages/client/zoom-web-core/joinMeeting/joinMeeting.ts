import {ZoomMtg} from '@zoomus/websdk';
import {ZoomWebProps} from '../types';

export function joinMeeting(signature: string, meetConfig: ZoomWebProps['config']) {
  ZoomMtg.init({
    leaveUrl: meetConfig.leaveUrl,
    isSupportAV: true,
    success: function (success: any) {
      console.log('Init Success ', success);
      ZoomMtg.join({
        meetingNumber: meetConfig.meetingNumber,
        userName: meetConfig.userName,
        signature: signature,
        apiKey: meetConfig.apiKey,
        passWord: meetConfig.passWord,

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
