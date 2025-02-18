function cashOut(amount) {
  const cashOutChargeRate = 1.75;
  if (typeof amount === "number" && amount >= 0) {
    return (amount * cashOutChargeRate) / 100;
  } else {
    return "Invalid";
  }
}
