# 用于发布npm包
set -e
# 清理已有的 lib
npm run clean
# 跳转到 packages/theme-default 安装依赖
cd ./packages/theme-default
npm i
# 切换回根目录
cd ../../
# 打包lib
npm run lib