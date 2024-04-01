//设置全局状态
export const useGlobalState = createGlobalState(()=>{
  const num = ref(0)
  const add = ()=>{
    num.value++
  }
  return {num,add}
})
//持久存储
export const useLocaleUser = createGlobalState(()=>{
  return useStorage('user',{
    name:"Lxb"
  })
})

//用户信息
export const useUserInfo = createGlobalState(()=>useStorage('userInfo',{},sessionStorage))

export const useGlobalMenu = createGlobalState(()=>useStorage('userMenu',{},sessionStorage))
