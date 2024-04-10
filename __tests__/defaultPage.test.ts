import {expect,test,vi} from 'vitest'
import {render} from '@testing-library/vue'
import defaultPage from '../src/pages/[...all].vue'
import {i18n} from '../src/modules/i18n'
import {router} from '../src/modules/route'

test('defaultPage页面的快照',()=>{
  const { container } = render(defaultPage,{
    global: {
      plugins:[i18n,router]
    }
  })
  expect(container).toMatchSnapshot()
})