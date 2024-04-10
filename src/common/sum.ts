// sum.js
export function sum(a, b) {
    return a + b
  }

// 函数实现
export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}

// 源码内的测试套件
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}