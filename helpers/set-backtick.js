const setBacktick = (tableOrColumn) => {
   if (/`/g.test(tableOrColumn)) return tableOrColumn;

   return tableOrColumn
      .split('.')
      .map((item) => `\`${item}\``)
      .join('.');
};

export default setBacktick;
