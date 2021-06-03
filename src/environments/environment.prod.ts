import {Constrants} from './constrants';

// @ts-ignore
// @ts-ignore
export const environment: Constrants = {
  production: true,
  USER_API: '/users',
  AUTH_API: '/login',
  REG_API: '/register',
  LESSON_ORDER_API: '/lessons/create',
  LESSONS_API: '/lessons',
  CATEGORY_API: '/categories',
  INSTR_API: '/instructors',
  PROGRAM_API: '/programs',
  BUYING_API: '/buying',
  wsEndpoint: 'wss://<replace with your own remote signalling server address>:443/ws/',
  RTCPeerConfiguration: {
    iceServers: [
      {
        urls: 'turn:turnserver:3478',
        username: 'user',
        credential: 'password'
      }
    ]
  }
};
