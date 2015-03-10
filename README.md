## ChefFarmer


This is an application to facilitate the connection between Twin Cities farmers and chefs

#### Build / Tech Stack
* scaffolding: [angular-fullstack generator](https://github.com/DaftMonk/generator-angular-fullstack)
* client: angular.js
* server: node.js
* db: mongodb/mongoose
* native app compatability: phone gap / cordova.js
* deployment: heroku/aws/grunt build-control

#### Links

* [Demo Site](https://fathomless-brushlands-3785.herokuapp.com)

* [Codebase](https://github.com/gemfarmer/cheffarmer/tree/master)

* [DB](https://www.mongolab.com/databases/heroku_app34758300/collections/things?saved=1426002857974&f=&s=&q=&pageSize=10&pageNum=0)

* [Deployment Platform](https://dashboard.heroku.com/apps/fathomless-brushlands-3785)

#### Social Media Login integration

`You will need to set environment variables for facebook auth. From `/dist`:
	heroku config:set FACEBOOK_ID=appId
	heroku config:set FACEBOOK_SECRET=secret

You will need to set environment variables for google auth. From `/dist`:
	heroku config:set GOOGLE_ID=appId
	heroku config:set GOOGLE_SECRET=secret

You will need to set environment variables for twitter auth. From `/dist`:
	heroku config:set TWITTER_ID=appId
	heroku config:set TWITTER_SECRET=secret


Your app should now be live. To view it run
	cd dist && heroku open`

#### Deployment
Follow these for successful deployments
`After app modification run
	grunt build
Then deploy with
	grunt buildcontrol:heroku`
	
#### UI/UX

