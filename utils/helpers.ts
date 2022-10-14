export function deepEqual(a: any, b: any): boolean {
  if (a === b) {
    //if they are simple native types do basic comparison
    return true;
  }

  if (a instanceof Date && b instanceof Date) {
    //if comparing dates return result of compared timestamps
    return a.getTime() === b.getTime();
  }

  //TODO change this whils configured for objects
  return false;
}
