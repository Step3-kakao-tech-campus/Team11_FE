import { atom } from 'recoil';

export const isLoginInState = atom({
  key: 'isLoginInState', // 고유한 식별자로 사용될 키 값
  default: false, // 기본값으로 로그인 상태를 false로 설정
});
