import styles from './index.less';

function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
    </div>
  );
}

// 扩展路由属性
IndexPage.title = 'Home Page';

export default IndexPage;
