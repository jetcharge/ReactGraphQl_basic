# README #

JetCharge uese this repo to asses the ability of potential employees to quickly learn skills in the React and GraphQL space.

## How do I get set up? ###
### Pre Requisites

Your local machine must have nodeJS installed.
### How to Install
1. Clone the repo locally
1. Change into the technical-challenge folder
1. Change into the graphql folder and run `npm install`.
1. Change into the react folder and run `npm install`.

### How to Start the Program
There are two separate processes that need to run locally on your machine. You can run them from separate terminals:
#### GraphQL
Change into the graphql sub folder and type `nodemon graphql.js`. This executes the graphql.js file, and monitors it for any changes, reloading the graphql server when any files in this folder change.

To verify GraphQL works, visit localhost:4000 in your browser. If it is installed and working you will see a window titled `Playground - ...`.

To verify the system entirely, copy the following and paste it into the browser window, replacing the `# Write your query or mutation here` text.

```
query chargers {
  chargers {
    identity
    manufacturer
    model
    address
  }
}
```

Now press the `Play` arrow and you should see the following in the response window:
```
{
  "data": {
    "chargers": [
      {
        "identity": "JC0001",
        "manufacturer": "Jetcharge",
        "model": "ChargeMate",
        "address": "91 Munster Tce, North Melbourne 3051"
      },
      {
        "identity": "JC0827",
        "manufacturer": "Telsla",
        "model": "Wall Connector",
        "address": null
      },
      {
        "identity": "WB0019",
        "manufacturer": "Quasar",
        "model": "WallBox",
        "address": "11-21 Underwood Road, Homebush, 2140"
      }
    ]
  }
}
```

#### React
Change into the react folder and type npm start



## Your Challenge (should you choose to accept it)

Modify the react application (in the react subfolder) to use the Apollo GraphQL React Client (https://www.apollographql.com/docs/react/) to load the list of chargers into a table in the front end.

The table should be structured like this:

Identity | Make | Model | Address |
---|---|---|---
JC0001 | Jetcharge | ChargeMate | 91 Munster Tce, North Melbourne 3051
JC0827 | Tesla | Wall Connector | 
WB0019 | Quasar | WallBox | 11-21 Underwood Road, Homebush, 2140

### Any Hints?

This task explores only a small percentage of the functionality of Apollo's React Client. You need to be looking at the useQuery hook only.

## Then What ?
After completing this challenge, please zip up the resulting folder and provide it back to JetCharge.