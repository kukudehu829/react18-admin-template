import { ConfigProvider } from 'antd'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'

// import { themeColor } from '@/features/theme/themeSlice'

import { routes } from './routes'
// import { useAppSelector } from './store'

export default function App() {
  const createdRoutes = createHashRouter(routes)

  // const primaryColor = useAppSelector(themeColor)

  return (
    <ConfigProvider
      // theme={{
      //   token: {
      //     colorPrimary: primaryColor
      //   }
      // }}
    >
      <RouterProvider router={createdRoutes} />
    </ConfigProvider>
  )
}