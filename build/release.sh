
set -e # 如果任何语句的执行结果不是true则应该退出
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # standard-verson修改version
  npm run version -- -m "[release]: $VERSION" -r $VERSION
  # 发版
  git push origin master "v$VERSION"
fi
