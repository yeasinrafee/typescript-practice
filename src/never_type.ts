function reject(message: string): never {
  throw new Error(message);
}

function processEvent(): never {
  while (true) {}
}

reject("...");
console.log("Hello world!");
