import React from 'react';
import styles from './index.less';

// todo 这是一个路由组件，此组件是由路由渲染出来的
export default function ProfilePage(props: any) {
  const { history } = props;
  return (
    <div>
      <h1 className={styles.title}>个人中心</h1>
      <p>
        <button onClick={() => history.goBack()}>返回</button>
      </p>
    </div>
  );
}
