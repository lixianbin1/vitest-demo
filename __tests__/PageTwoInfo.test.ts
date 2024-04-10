import {expect,test,vi} from 'vitest'
import {render} from '@testing-library/vue'
import PageTwoInfo from '../src/pages/PageTwo/info.vue'
import {i18n} from '../src/modules/i18n'
import {router} from '../src/modules/route'

test('PageTwoInfo页面的快照',()=>{
  const { container } = render(PageTwoInfo,{
    global: {
      plugins:[i18n,router]
    }
  })
  expect(container).toMatchSnapshot()
})