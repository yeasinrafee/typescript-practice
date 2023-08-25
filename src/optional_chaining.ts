type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// Optional Property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customer?.[0]

// Optional Call
let log: any = null;
log("a"); // It'll give an error;
log?.("a");
