export const defaultOptions = {
  select: {
    distinct: false,
    columns: '*' || [],
    table: '',
    join:
      {
        type: null,
        on: {
          a: null,
          b: null,
        },
        outer: false,
      } || '',
    where: null,
    limit: null,
    offset: null,
    groupBy: null,
    orderBy: [null, 'ASC'],
    params: [],
    mountOnly: false,
  },
  insert: {
    table: '',
    values: [],
    mountOnly: false,
  },
  update: {
    table: '',
    set: [],
    where: null,
    limit: null,
    params: [],
    mountOnly: false,
  },
  delete: {
    table: '',
    where: null,
    limit: null,
    params: [],
    mountOnly: false,
  },
};
