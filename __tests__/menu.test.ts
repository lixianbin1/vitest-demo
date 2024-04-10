import {userList,adminList} from '../src/stores/menu'
import {describe,test,expect,assert} from 'vitest'
describe('Menu测试',()=>{
  test('类型测试',()=>{
	  assert.isArray(userList)
    assert.isArray(adminList)
  })
})