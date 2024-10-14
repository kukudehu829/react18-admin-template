import { Spin } from 'antd'
import React from 'react'


export default function Loading() {
  return (
    <Spin
      size="large"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }}
    />
  )
}