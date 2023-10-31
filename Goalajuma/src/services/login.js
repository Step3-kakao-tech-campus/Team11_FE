import { instance } from "./index";

export const loginInquire = (data) => {
  const {email, password} = data;
  
  return instance.post(`/api/auth/login`, {
    email: email,
    password: password
  })
  // .then(res =>{
  //   const expirationTime = new Date(res.data.data.expiredTime)
  //   const currentTime = new Date()
  //   const remainedTime = (expirationTime - currentTime) / (1000*60)
  //   if(remainedTime <= 30){
  //     refreshTokenInquire(data)
  //       .then(res => {
  //         localStorage.setItem('token', res.data.data.accessToken);
  //       })
  //       .catch(err => {
  //         console.log('Refresh Token 요청 실패:', err);
  //       });
  //   } else {
  //     localStorage.setItem('token', res.data.data.accessToken)
  //   }
  // })
  
};

export const refreshTokenInquire = (data)=>{
  const {email, password} = data;

  return instance.post(`/api/auth/login`, {
    email: email,
    password: password
  });
}