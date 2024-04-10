import {expect,test,vi} from 'vitest'
import {render} from '@testing-library/vue'
import PageTwo from '../src/pages/PageTwo/index.vue'
import {i18n} from '../src/modules/i18n'
import {router} from '../src/modules/route'

test('PageTwo页面的快照',()=>{
  const { container } = render(PageTwo,{
    global: {
      plugins:[i18n,router]
    }
  })
  expect(container).toMatchSnapshot()
})