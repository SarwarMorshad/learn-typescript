// Utility types: pick
type product = {
  id: number;
  name: string;
  price: number;
  description: string;
  color: string;
  stock?: number;
};

// Utility types: pick > creates a type by picking specified properties
type productSummary = Pick<product, "id" | "name" | "price">;

// Utility types: omit > creates a type by omitting specified properties
type productWithoutDescription = Omit<product, "description">;

// Utility types: Required > makes all properties required
type productWithColor = Required<product>;

// Utility types: Partial > makes all properties optional
type partialProduct = Partial<product>;

// Utility types: Readonly > makes all properties read-only
type readonlyProduct = Readonly<product>;
