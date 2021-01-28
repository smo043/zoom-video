export interface ZoomWebProps {
  config: {
    meetingNumber: number | string;
    userName: string;
    userEmail?: string;
    passWord?: string;
    apiKey: string;
    apiSecret: string;
    leaveUrl: string;
    role: number | string;
  };
}
