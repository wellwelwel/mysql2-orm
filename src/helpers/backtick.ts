export const backtick = (tableOrColumn: string): string => {
  const btTableOrColumn = tableOrColumn.includes('`')
    ? tableOrColumn.replace(/`/g, '')
    : tableOrColumn;

  return btTableOrColumn
    .split('.')
    .map((item) => `\`${item}\``)
    .join('.');
};
