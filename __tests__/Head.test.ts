import { describe,expect, test ,vi} from 'vitest';
import {render} from '@testing-library/vue'
import Head from '../src/components/Head.vue'
import {i18n} from '../src/modules/i18n'
import {router} from '../src/modules/route'

describe('Head 组件', () => {
  test('Head页面的快照',()=>{
    const { container } = render(Head,{
      global: {
        plugins:[i18n,router]
      }
    })
    expect(container).toMatchSnapshot()
  })
  test('Head页面存在', () => {
    expect(Head).toBeDefined()
  })
})
