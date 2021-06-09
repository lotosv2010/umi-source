import React from 'react';
import styles from './index.less';

// todo 这是一个路由组件，此组件是由路由渲染出来的
function ProfilePage(props: any) {
  const { history } = props;
  const logout = () => {
    localStorage.removeItem('isLogin');
    history.push('/login');
  };
  return (
    <div>
      <h1 className={styles.title}>个人中心</h1>
      <p>
        <button onClick={() => history.goBack()}>返回</button>
      </p>
      <p>
        <button onClick={logout}>退出</button>
      </p>
    </div>
  );
}
export default ProfilePage;
