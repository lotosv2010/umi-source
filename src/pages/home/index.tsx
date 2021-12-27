import { useEffect, useState } from 'react';
import styles from './index.less';
import { List, Avatar } from 'antd';

function IndexPage() {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const data = await fetch(`/api/tags`).then((res) => res.json());
      setList(data?.list || []);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div style={{ background: '#ffffff', height: '100%' }}>
      <h1 className={styles.title}>Home</h1>
      <List
        itemLayout="horizontal"
        dataSource={list}
        bordered
        style={{
          height: 'calc(100vh - 200px)',
          overflow: 'auto',
          margin: 20,
          border: '1px solid #f0f0f0',
        }}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={item.name}
              description={`value is ${item.value} and type is ${item.type}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

// 扩展路由属性
IndexPage.title = 'Home Page';

export default IndexPage;
