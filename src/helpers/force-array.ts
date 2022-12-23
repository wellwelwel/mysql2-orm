const forceArray = (input: any) => {
   if (Array.isArray(input)) return input || [];
   return [input] || [];
};

export default forceArray;
