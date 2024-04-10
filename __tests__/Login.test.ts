import {expect,test,vi,it,describe,bench} from 'vitest'
import { mount } from '@vue/test-utils'
import {render} from '@testing-library/vue'
import LoginPage from '../src/pages/login/index.vue'
import {i18n} from '../src/modules/i18n'
import {router} from '../src/modules/route'

describe('Login.vue', () => {
  test('renders login form', () => {
    const wrapper = mount(LoginPage,{
      global: {
        plugins:[i18n,router]
      }
    })

    // 检查是否渲染了正确的元素
    expect(wrapper.find('#login').exists()).toBe(true)
    expect(wrapper.find('.header').exists()).toBe(true)
    expect(wrapper.find('.main').exists()).toBe(true)
    expect(wrapper.find('.login_box').exists()).toBe(true)
    expect(wrapper.find('.submit-btn').exists()).toBe(true)
  },{time:1000})

  it('renders correct default data', async () => {
    const wrapper = mount(LoginPage,{
      global: {
        plugins:[i18n,router]
      }
    })

    // 检查默认数据是否正确
    expect(wrapper.vm.state.form.ptCode).toBe('FF038')
    expect(wrapper.vm.state.form.username).toBe('Admin')
    expect(wrapper.vm.state.form.password).toBe('123456')
  })

  // 更多的测试...
})

test('Login页面的快照',()=>{
  const { container } = render(LoginPage,{
    global: {
      plugins:[i18n,router]
    }
  })
  expect(container).toMatchSnapshot()
})

// test('函数值快照', () => {
//   const result = toUpperCase('foobar')
//   expect(result).toMatchSnapshot()
// })