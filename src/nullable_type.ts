function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log(`Mr. ${typeof name}`);
}

greet("Rafee");
greet(null);
greet(undefined);
