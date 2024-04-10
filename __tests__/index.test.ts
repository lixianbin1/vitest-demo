import {expect,test,vi} from 'vitest'
import {render} from '@testing-library/vue'
import HomePage from '../src/pages/index.vue'
import {i18n} from '../src/modules/i18n'
import {router} from '../src/modules/route'

test('HomePage页面的快照',()=>{
  const { container } = render(HomePage,{
    global: {
      plugins:[i18n,router]
    }
  })
  expect(container).toMatchSnapshot()
})