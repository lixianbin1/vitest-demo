import { useGlobalState, useLocaleUser, useUserInfo, useGlobalMenu } from '../src/stores/GlobalState';
import { vi,describe,test,expect} from 'vitest';  

describe('Global State', () => {  
  test('useGlobalState 测试', () => {  
    const { num, add } = useGlobalState();  
    expect(num.value).toBe(0);  
    add();  
    expect(num.value).toBe(1);  
  });  

  test('useLocaleUser', () => { 
    const Loacl = useLocaleUser(); 
    expect(Loacl.value.name).toBeDefined();  
  }); 

  test('useUserInfo', () => {  
    const userInfo= useUserInfo(); 
    expect(typeof userInfo.value).toBe('object'); 
  });  

  test('useGlobalMenu', () => {  
    const GlobalMenu = useGlobalMenu(); 
    expect(typeof GlobalMenu.value).toBe('object'); 
  });  
});