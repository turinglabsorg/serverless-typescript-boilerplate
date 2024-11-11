# Serverless - NodeJS - Typescript

This is a simple tutorial on how to use [Serveless framework](https://www.serverless.com/) with Typescript. If you don't know what *serverless* is I will say it simple: it's a life saver if you need to deploy few functions quick and be sure they will work forever. It works with AWS or using Docker with your preferred provider. For who cames from blockchain and smart contract platforms like me it's even more funny. Everything seems like a blockchain program..without blockhain!

With AWS costs are very low, they offer 1 million requests per month for free: https://aws.amazon.com/en/lambda/ and overall the developer experience is good.

## Install dependencies

We'll use `yarn` to install dependencies, so be sure you have it in your system. Then we can start with:

```
git clone https://github.com/turinglabsorg/serverless-typescript-boilerplate
cd serverless-typescript-boilerplate
yarn
```

## Database

By default we use MongoDB, you have a docker image running in your machine. To run it just use:

```
yarn mongo:build
yarn mongo:run
```
If you don't want to use it just remove the `mongodb_connection` from `.env` file.
## Work completely local

If you want to work completely offline you can run, this will not require any serverless environment:

```
yarn dev:local
```

## Work with serverless

First of all we need to create the application, login to your serverless dashboard and create a new "Existing service".

Then run in your terminal:
```
serverless --org=turinglabsorg
```

Of course changing `turinglabsorg` with your organization name in serverless.

### Deploy your code to AWS

```
yarn deploy:<dev|prod>
```

### Working offline

You can work offline with this boilerplate just using:

```
yarn dev:serverless:local
```

You can also now redirect live traffic locally with:

```
yarn dev:serverless:live
```

## Remove all resources from AWS

If you want to remove all resources from AWS you need to run:

```
serverless remove
```


## Conclusions

That's it, simple and efficient. The script will compile the source each time you deploy (or save, if you work offline) and you can use all the power of typescript!