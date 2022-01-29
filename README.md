# Serverless - NodeJS - Typescript

This is a simple tutorial on how to use [Serveless framework](https://www.serverless.com/) with Typescript. If you don't know what *serverless* is I will say it simple: it's a life saver if you need to deploy few functions quick and be sure they will work forever. It works with AWS and Google Cloud Platform (which i don't use tbh). For who cames from blockchain and smart contract platforms like me it's even more funny. Everything seems like a blockchain program..without blockhain!

With AWS costs are very low, they offer 1 million requests per month for free: https://aws.amazon.com/en/lambda/ and overall the developer experience is good.

## Install dependencies

We'll use `yarn` to install dependencies, so be sure you have it in your system. Then we can start with:

```
git clone https://github.com/turinglabsorg/serverless-typescript-boilerplate
cd serverless-typescript-boilerplate
yarn
```

## Create application

First of all we need to create the application, login to your serverless dashboard and create a new "Existing service".

Then run in your terminal:
```
serverless --org=turinglabsorg
```

Of course changing `turinglabsorg` with your organization name in serverless.

## Deploy for the first time

When deploying we must be sure that `.build` folder doesn't exists, so first remove it, then we can run the actual deploy:
```
rm -rf .deploy
serverless deploy
```

## Working offline

You can work offline with this boilerplate just using:

```
serverless offline
```

## Setup CI/CD

If you want to setup CI/CD you have to go to serverless dashboard, go under *settings* tab and link your repository.

## Conclusions

That's it, simple and efficient. The script will compile the source each time you deploy (or save, if you work offline) and you can use all the power of typescript!