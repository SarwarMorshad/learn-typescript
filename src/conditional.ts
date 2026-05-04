// conditional types
type richPeopleVehicle = {
  bike: string;
  car: string;
  yacht: string;
};

type checkVehicle<T> = T extends keyof richPeopleVehicle ? "rich" : "not rich";

type hasBike = checkVehicle<"bike">; // "rich"
