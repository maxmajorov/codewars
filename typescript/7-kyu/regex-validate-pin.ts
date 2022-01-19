function validatePin(pin: string): boolean {
  let regex = new RegExp(/[^0-9]/g);

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  return regex.test(pin) ? false : true;
}
