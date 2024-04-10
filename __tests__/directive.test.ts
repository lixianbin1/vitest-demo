import {vBlur,Add} from '../src/common/directive'
import {describe,test,expect,vi} from 'vitest'

describe('directive 测试',()=>{
  test('vBlur 测试',()=>{
    const el = document.createElement('input')
    const focusEvent = new Event('focus')
    const fn = vi.fn()
    el.blur = fn
    vBlur.mounted(el)
    el.dispatchEvent(focusEvent);
    expect(el.blur).toHaveBeenCalled();
  })
  test('Add 测试',()=>{
    expect(Add(1, 2)).toBe(3);
  })
})