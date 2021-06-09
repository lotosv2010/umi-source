import React from 'react';
import style from './index.less';
import { Link } from 'umi';

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <header className={style.header}>
        <p style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Link to="/">首页</Link>
          <Link to="/user">用户</Link>
          <Link to="/profile">个人中心</Link>
        </p>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>footer</footer>
    </>
  );
};

export default Layout;
