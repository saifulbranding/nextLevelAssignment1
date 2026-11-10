# Understanding TypeScript's `any`, `unknown`, and `never`

## Introduction

TypeScript has three special types: `any`, `unknown`, and `never`. They may look similar, but they work differently. Understanding these types helps us write better and safer code.

# Understanding the Three Types

Let's look at what each type does.

any:  It allows us to use any type of value without checking it.
unknown: It also accepts any value, but we must check its type before using it.
never: It represents a value that never happens or a function that never finishes normally.

Here are some simple examples:

## typescript
let a: any = "Hello";
a.toFixed(); // No TypeScript error

let b: unknown = "Hello";
// b.toUpperCase(); // Error

if (typeof b === "string") {
  console.log(b.toUpperCase()); // Works
}

## function showError(): never {
  throw new Error("Something went wrong");
}


## Why Is `unknown` Better Than `any`?

The main reason is safety. When we use `any`, TypeScript does not check whether our code is correct. This can cause unexpected errors when the program runs.

But `unknown` makes us check the value before using it. This helps us avoid mistakes.

For example:

```typescript
const printValue = (value: unknown) => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

Here, we first check whether the value is a string. Only then do we use `toUpperCase()`.

## Conclusion

In simple words, `any` gives us freedom but removes type safety. And `unknown` gives us flexibility while keeping our code safe. `never` is used when something should never happen. So, why we should prefer `unknown` over `any in most situations.