set -e
# 生成组件入口文件
npm run build:entry
# 获取最后一次提交的commit -m
COMMIT_M=`git log --pretty=format:"%s" -1`
# 打包dist，并发布到gh-page分支上，实现展示页面的更新，(下面涉及的变量在travis网站上配置)
npm run build
cd ./dist
git init
git config user.name "$U_NAME"
git config user.email "$U_EMAIL"
git add .
git commit -m "$COMMIT_M"
git push --force --quiet "https://$GH_TOKEN@$GH_REF" master:$P_BRANCH