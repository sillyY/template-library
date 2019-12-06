#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf config.json

# 生成静态文件
npm run build

# 提交源码
git add -A 
git commit -m 'update'
git push origin master
