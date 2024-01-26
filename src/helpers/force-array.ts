const forceArray = (input: unknown) => {
  if (Array.isArray(input)) return input || [];
  return [input] || [];
};

export default forceArray;
