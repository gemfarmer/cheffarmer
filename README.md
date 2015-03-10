## ChefFarmer


This is an application to facilitate the connection between Twin Cities farmers and chefs

#### Build / Tech Stack
* scaffolding: [angular-fullstack generator](https://github.com/DaftMonk/generator-angular-fullstack)
* client: angular.js
* server: node.js
* db: mongodb/mongoose
* native app compatability: phone gap / cordova.js
* deployment: heroku/aws/grunt build-control

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

