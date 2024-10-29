import { Layout, Menu, Row } from 'antd'
import React, { Suspense, useMemo, useState } from 'react'
import { Navigate,NavLink, Outlet, useLoaderData, useLocation, useMatches } from 'react-router-dom'

import Loading from '../Loading'

// import { useEmotionCss } from '../hooks'
import { menuItems } from '../../routes'
import Header from './header'

const { Content, Sider } = Layout

export default function AdminLayout() {
  const userInfo: any = useLoaderData()
  console.log('useLoaderData', userInfo)

  const location = useLocation()
  const matches = useMatches()
  const [collapsed, setCollapsed] = useState(false)
  const selectedKeys = [location.pathname]
  const defaultOpenKeys = useMemo(() => {
    return matches.slice(1, -1).map((item) => item.pathname)
  }, [matches])
  
  // const logoTextClassName = useEmotionCss(({ token }) => ({
  //   color: token.colorWhite,
  //   lineHeight: '48px',
  //   fontSize: 18
  // }))

  // const layoutContentClassName = useEmotionCss(({ token }) => ({
  //   background: token.colorBgContainer,
  //   padding: 16,
  //   position: 'relative'
  // }))

  // if (!userInfo) {
  //   return <Navigate replace to="/login" />
  // }

  return (
    <Layout style={{ minHeight: '100%', minWidth: 960 }}>
      <Sider
        width={200}
        collapsed={collapsed}
        collapsible
        onCollapse={(value) => setCollapsed(value)}
      >
        {/* <Row justify="center" className={logoTextClassName}> */}
        <Row justify="center">
          {collapsed ? 'Admin' : 'Admin Template'}
        </Row>
        <Menu
          theme="dark"
          mode="inline"
          style={{ height: 'calc(100vh - 48px)' }}
          items={menuItems}
          selectedKeys={selectedKeys}
          defaultOpenKeys={defaultOpenKeys}
        />
      </Sider>
      <Layout>
        <Header />
        {/* <Content className={layoutContentClassName}> */}
        <Content>
          <Suspense fallback={<Loading />}>
            {/* Outlet 嵌套路由入口*/}
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}