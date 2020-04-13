module.exports =
{
  "env": {
    browser:true,
    node:true
  },
  "plugins":["react"],
  "extends": "airbnb-base",
  "rules": {
    // windows linebreaks when not in production environment
    "linebreak-style": 0,
  },
  "parserOptions":{
    "ecmaFeatures":{
      "jsx":true
    }
  }
  };