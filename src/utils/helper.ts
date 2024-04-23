export const countErrors = (actual: string, expected: string) => {
  const expectedChars = expected.split("");
  return expectedChars.reduce((errors, expectedChar, index) => {
    const actualChar = actual[index];
    return errors + (actualChar == expectedChar ? 0 : 1);
  }, 0);
};
export const calculateCorrectAccuracy = (total: number, errors: number) => {
  if (total > 0) {
    const accuracy = ((total - errors) / total) * 100;
    return accuracy;
  }
  return 0;
};
