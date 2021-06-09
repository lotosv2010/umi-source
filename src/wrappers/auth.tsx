import { Redirect } from 'umi';
export default (props: any) => {
  const isLogin = localStorage.getItem('isLogin');
  console.log(isLogin);
  if (isLogin) {
    return props.children;
  } else {
    return (
      <Redirect to={{ pathname: '/login', state: { from: '/profile' } }} />
    );
  }
};
