let anything: any;

anything = 100;

const kgToGmConverter = (input: number | string): number | string | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is : ${Number(value) * 1000} gm`;
  }
};

const result1 = kgToGmConverter(2) as number;
console.log(result1);

const result2 = kgToGmConverter("2 kg") as string;
console.log(result2);
