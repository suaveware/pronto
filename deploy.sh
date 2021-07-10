npm version patch
yarn build
# Github usually ignores files and folders that start with "_". This file makes it not do that.
touch build/.nojekyll
# Contains the url of our site to serve in a custom domain
echo "pronto.suaveware.dev" > build/CNAME
git init build/
git -C build/ remote add origin git@github.com:luizcarlos1405/pronto.git
git -C build/ add -A
git -C build/ push origin master:deploy -f