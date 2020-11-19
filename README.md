This repo holds a sample 'gulpfile.js' config to compile *.scss into regular *.css files. The aim here is to simplify *.scss compiling locally due to Shopify themes removing this functionality.

---

Due to Shopify removing *.scss compiling, moving to an alternitive solution is needed for newer themes going forward. As a result, I have divised the following "setup" in order to get going with *.scss compiling locally, faster - it contains two simple tasks:

- gulp style
- gulp watch

'style' simply does a one-time compile of the code and outputs it into the ./css directory. The 'watch' task allows for constant compiling by watching the ./sass directory for changes meaning a user no longer needs to constantly run 'gulp style' when wanting to compile.

It contains the following plugins:

- gulp@4.0.2
- gulp-sass@4.1.0
- autoprefixer@9.8.6

As mentioned above, autoprefixer is included to help elevate the stress of supporting older browsers, this has been included as part of the 'gulp style' and 'gulp watch' tasks. The supported browser list can be altered to fit individual project needs or simply used globally.