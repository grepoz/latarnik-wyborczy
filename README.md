there ara some issues with routing so if it doesn't work, please use change the following constant value `pathSegmentsToKeep` to 0 or 1.
Also, there are some env vars that should be change if problem arises:
- REACT_APP_HOMEPAGE_URL
- REACT_APP_DEFAULT_ROUTING_PATH

You can develop the app by running the following command:
- ```npm start```
- ```npm run build-webpack-development```
Which are provided in the package.json file.
Note that using `webpack` is not necessary, but it is used to provide a better development experience, 
although it's slower and debugging is harder.

To publish the app, you can use the following command:
- ```npm run deploy```: it will automatically build the app and publish it to the GitHub Pages to the branch `gh-pages`.

In the future it might be beneficial to use Gruntfile.js or to automate the process of publishing the app leveraging also the GitHub Actions.