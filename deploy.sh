yarn build
touch build/.nojekill
echo "pronto.suaveware.dev" > build/CNAME
git init build/
git -C build/ remote add origin git@github.com:luizcarlos1405/pronto.git
git -C build/ add -A
git -C build/ commit -m "deploy"
git -C build/ push origin master:deploy