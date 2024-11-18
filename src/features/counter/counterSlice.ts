import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。
      // 并不是真正的改变 state 因为它使用了 immer 库
      // 当 immer 检测到 "draft state" 改变时，会基于这些改变去创建一个新的
      // 不可变的 state
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
    
  }
})

// 下面这个函数就是一个 thunk ，它使我们可以执行异步逻辑
// 你可以 dispatched 异步 action `dispatch(incrementAsync(10))` 就像一个常规的 action
// 调用 thunk 时接受 `dispatch` 函数作为第一个参数
// 当异步代码执行完毕时，可以 dispatched actions
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer