# JavaScript Basics

The repository contains test cases and empty function definitions which need to be populated to solve the different challenges set in this weeks walkthrough.

## Getting started

### Clone the repository
First up, create a fork of this repo.

Then clone your copy of the repo:
- `git clone git@github.com:*your-github-username*/javascript-basics.git`

Then `cd` into the repository.

You will see a few files and directory in here. Most interestingly we have:
- `src` directory - this is where our code lives
- `__tests__` directory - this is where our test code lives
- a `package.json` file, which contains some configuration for our project

### Install the project dependencies
The `npm install` command (or `npm i` for short)  will tell npm (node package manager) to download the `dependencies` and `devDependencies` for this project, which are defined in the `package.json` file.

**Take a look in `package.json` - what dependencies does this project have?**

Now run the `npm install` command. Once it has completed, you should see a new `node_modules` directory in the repository. This is where our dependencies live. It's important that we don't add this directory to git, since it can contain 100000's of files that we don't need to maintain, and can just be downloaded.

In the `package.json` file you can see that there is only one dependency for this project - **jest**

### Run the test code
Jest is a JavaScript testing framework - it allows us to write automated tests that 
1. describe how our code should behave
2. assert that is _does_ behave in the desired way

Once you have installed the dependencies, run `npm test`. This command will run the `test` script defined in our `package.json`, which simply runs Jest. When we run Jest, it will execute the test code written in the `__tests__` directory. For now, you should see a message saying that all of the tests were skipped.

Take a look at the files in the `__tests__` directory - you will see a few files in here, all ending with `.test.js`. These map to the files in the `src` directory, and contain the tests for these files.

For example `__tests__/strings.test.js` contains the tests for the functions defined in `src/strings.js`.

Take a look at the `__tests__/strings.test.js`. At the top, we have a `require` statement. This imports the functions from our `src/strings.js` file into the test file, so that the tests can use the functions we have written in that file.

Beneath the `require`s are the actual tests.

These are broken into `describe` blocks, which group the tests for each function together. Each `describe` block contains some `it` blocks, which define an individual test, along with . (At the moment, these should actually be `xit` blocks... more on that imminently).

The individual `it` blocks make some assertions about what should happen when we call the function we are testing.

For example:

```js
describe('sayHello', () => {
  it('returns "Hello world!" when passed "world"', () => {
    expect(sayHello('world')).toEqual('Hello, world!');
  });
});
```

- `describe('sayHello', () => { ... });` tells us that all of the code inside the block is concerned with testing the `sayHello` function.
- `it('returns "Hello world!" when passed "world"', () => { ... });` tells us what the return value of the function should be when passed a certain argument.
- `expect(sayHello('world')).toEqual('Hello, world!');` this line invokes the function with the string `'world` as an argument, and make an assertion about the return value of this action - it should equal `'Hello, world!'`.

The reason all of the tests were skipped is because we have used `xit` instead of `it`. Change the `xit` on the first test to an `it` and then run `npm test` in your terminal again. You should now see the test run, and fail - with the following error message:

```
Expected value to equal:
      "Hello, world!"
    Received:
      undefined

    Difference:
      Comparing two different types of values. Expected string but received undefined.
```

This tells us that calling the `helloWorld` function with the string `'world'` returned `undefined`, but the test was expecting it to return the string `'Hello, world!'`

Now take a look at `src/strings.js` and in particular at the `sayHello` function: 

```js
const sayHello = (string) => {
  // your code here
};
```

Can you see why we got the test result that we did?

You challenge is to write some code in the `sayHello` function in `src/strings.js` that will make the test pass. *You should not update the tests...*
