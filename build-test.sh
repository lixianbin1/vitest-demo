#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run build

# 复制文件
cp serve.js dist/
cd dist

# 执行测试
node serve.js