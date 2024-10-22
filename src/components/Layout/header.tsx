import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Dropdown, MenuProps, Row, Space } from 'antd'
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom'

// import Theme from '@/features/theme/theme'

// import { breadcrumbNameMap } from '../routes'
// import { logout } from '../routes/auth'

export default function AdminLayout() {
  const userInfo: any = useLoaderData()

  const location = useLocation()
  const navigate = useNavigate()

  // if (!userInfo) {
  //   return <Navigate replace to="/login" />
  // }

  const pathSnippets = location.pathname.split('/').filter((i) => i)
  // const breadcrumbItems = pathSnippets.map((_, index) => {
  //   const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
  //   return {
  //     key: url,
  //     title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
  //   }
  // })

  const handleLogout = async () => {
    // await logout()
    navigate('/login', { replace: true })
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <Button type="link" size="small" style={{ color: 'gray' }}>
          <UserOutlined />
          <span>个人中心</span>
        </Button>
      ),
      key: '0'
    },
    {
      label: (
        <Button type="link" size="small" style={{ color: 'gray' }}>
          <SettingOutlined />
          <span>个人设置</span>
        </Button>
      ),
      key: '1'
    },
    { type: 'divider' },
    {
      label: (
        <Button type="link" size="small" onClick={handleLogout} style={{ color: 'gray' }}>
          <LogoutOutlined />
          <span>退出登录</span>
        </Button>
      ),
      key: '3'
    }
  ]

  return (
    <Row
      style={{
        height: 48,
        padding: '0px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        background: '#f99'
      }}
    >
      <Row align="middle">
        {/* <Breadcrumb items={breadcrumbItems} /> */}
      </Row>
      <Space size={12}>
        {/* <Theme /> */}
        <Dropdown menu={{ items }} placement="bottom">
          <Row align="middle">
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
              style={{ width: 32, height: 32 }}
            />
            <span style={{ marginLeft: 8, color: 'gray' }}>{userInfo?.user?.username}</span>
          </Row>
        </Dropdown>
      </Space>
    </Row>
  )
}