# Don't Waste Neither Time Nor Food

## Abstract

This project is a meal planner program that leverage Machine Learning algorithm in order to provide meal plan which eventually minimize food waste

*Beware that this is, for now, only a proof of concept*

## How it works

The program relies on a recipes and ingredients "database" (stored as two arrays in actions.ts file) in which it will pick to compose a meal plan. 

Waste minimization is made by the assomption that you can only buy ingredients with a minimal quantity (but these quantity may/should be adjust to match your reallity - all retail stores doesn't provide the same products in the same format) then the algorithm will try to mix and match recipes that will use the maximun of the goods you have to buy

Eventually this program is intended to be highly customizable and why not available on the web

## How to use it

It providess only a (non friendly) command line interface (yes, this is a POC) mainly design to validate that it could work, so if you read these lines feel free to explore the code (and/or contact me if you are more interested).

And you want to give it a quick try : 

Indeed the program needs to learn before perform, launch the learning with
```
npm run start -- t ./memory.json
```
where `./memory.json` is the name of the output file where learning results will be stored

When learning has been done, you can try it with
```
npm run start -- ./memory.json
```
again `./memory.json` should be a file containing learning results but in that case it will be loaded into to ML engine


eventually you may run the program with `s` as second option, then it will runs a thousand times and calculate the average performance (compared to a random selection of meals)
```
npm run start -- s ./memory.json
```

## Under the hood

The underlying implementation is a Markov Decision Process and the engine is provided by [markovjs](https://github.com/lsunsi/markovjs) by [lsunsi](https://github.com/lsunsi) (big thanks to him for his awesome work 🙏)


