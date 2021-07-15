echo "Which version to bump? [major | minor | patch] https://docs.npmjs.com/cli/v7/commands/npm-version"
read versionName
echo "npm version $versionName"
npm version $versionName

echo "Building"
yarn build

echo "Ensuring github configurations"
# Github usually ignores files and folders that start with "_". This file makes it not do that.
touch build/.nojekyll
# Contains the url of our site to serve in a custom domain
echo "pronto.suaveware.dev" > build/CNAME

echo "Committing and pushing"
git -C build/ init
git -C build/ remote add origin git@github.com:luizcarlos1405/pronto.git
git -C build/ add -A
git -C build/ commit -m "deploy"
git -C build/ push origin master:deploy -f