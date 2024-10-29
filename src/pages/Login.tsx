
import { Button } from "antd";
import { useNavigate } from 'react-router-dom'
import { routes } from '../routes'


const Login: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    routes.push({
      name: 'test',
      path: '/test',
      // icon: <DesktopOutlined />,
      // element: <Login />
    })
    console.log(routes, "????1111");
    navigate('/home'); // 默认是以push的形式跳转
  }
  return (
    <div>
      <Button onClick={goHome}>登录</Button>
    </div>
  )
}

export default Login