import React from 'react';

export default function Login(props: any) {
  console.log(props);
  const login = () => {
    localStorage.setItem('isLogin', 'true');
    const {
      history,
      location: { state },
    } = props;
    const from = state?.from || '/';
    history.push(from);
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Login</h1>
      <button onClick={login}>登录</button>
    </div>
  );
}
