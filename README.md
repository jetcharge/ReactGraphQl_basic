# README #

JetCharge uese this repo to asses the ability of potential employees to quickly learn skills in the React and GraphQL space.

## How do I get set up?
### Pre Requisites

Your local machine must have nodeJS installed.
### How to Install
1. Clone the repo locally
1. Change into the technical-challenge folder
1. Change into the graphql folder and run `npm install`.
1. Change into the react folder and run `npm install`.

## How to Start the Program
There are two separate processes that need to run locally on your machine. You can run them from separate terminals:

### GraphQL
Change into the graphql sub folder and type `node graphql.js`. 

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

### React
Change into the react folder and type npm start

If things are working normally, a new browser tab should open pointing to localhost port 3000, and display `Display Charger Data Here.`.

## Your Challenge

Modify the react application (in the react subfolder) to use the Apollo GraphQL React Client (https://www.apollographql.com/docs/react/) to display info about the chargers returned from the `chargers` GraphQL query.

It should be placed where the text `Display Charger Data Here.` is now placed.

### Any Hints?

This task explores only a small percentage of the functionality of Apollo's React Client. You need to be looking at the useQuery hook, and the other parts you need to get that working, only.

## What Is JetCharge Looking For

### Demonstrate Composition

Demonstrate that you understand React is about creating small, reusable, flexible components.

One way to show this would be to use different components to 1) load; and 2) render; the data.

### Use ant.design or another front end library

We think it is preferable to use a 3rd party open source library to format your components. We use ant.design (and other bits from other libraries), but if you want to use another one you are familiar with, feel free.

## Then What ?
After completing this challenge, please zip up the resulting folder and email it to JetCharge. You may exclude the node_modules folder from your zipped up file, we will use npm install to include any dependencies in your package.json file before we review it.