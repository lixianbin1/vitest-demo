import {describe,expect,test,vi} from 'vitest'
import {render,screen} from '@testing-library/vue'
import { mount } from '@vue/test-utils';
import PageOne from '../src/pages/PageOne/index.vue'
import {i18n} from '../src/modules/i18n'
import {router} from '../src/modules/route'
import { HomeJson } from '@/apis'
  
// 模拟HomeJson函数  
vi.mock('@/apis', () => ({  
  HomeJson: vi.fn().mockResolvedValue('mocked data'),  
}));  

describe('PageOne',()=>{
  test('PageOne快照',async()=>{
    const { container } = render(PageOne,{
      global: {
        plugins:[i18n,router]
      }
    })
    await new Promise(resolve => setImmediate(resolve));
    expect(container).toMatchSnapshot()
  })
  
  test('渲染标题和数据', async () => {
    // render(PageOne);  
    await new Promise(resolve => setImmediate(resolve)); // 等待异步操作完成  
  
    // 检查标题 "Page One" 是否存在  
    const headingOne = screen.getByText('Page One');  
    expect(headingOne).toBeDefined(); // 确保元素被定义  
    expect(headingOne.tagName).toBe('H1'); // 检查标签名  
  
    // 检查数据 "mocked data" 是否渲染  
    const headingTwoData = screen.getByText('mocked data');  
    expect(headingTwoData).toBeDefined();  
    expect(headingTwoData.tagName).toBe('H2'); 
  
    // 检查HomeJson是否被调用  
    expect(HomeJson).toHaveBeenCalled();  
  });  

})
