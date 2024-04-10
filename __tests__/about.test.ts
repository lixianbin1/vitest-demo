import about from '../src/apis/abort'
import {test,describe, expect} from 'vitest'

describe('about测试',()=>{
  test('方法测试',()=>{
    expect(about.add).toBeDefined()
    expect(typeof about.judge).toBe('function')
    expect(about.remove).toBeDefined()
    expect(about.removeAll).toBeDefined()
  })
})