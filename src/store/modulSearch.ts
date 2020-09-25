import { Action } from 'redux';

export const QUERY = 'QUERY';
export const INPUT_CHANGED = 'INPUT_CHANGED';

export const setChangedSearchInput = (query: string) => (
  {
    type: INPUT_CHANGED,
    query,
  }
);

export type setQuery = Action<typeof QUERY> & {
  query: string;
}

type AllowedActions = setQuery;

const reducer = (query = '', action: AllowedActions) => {
  switch (action.type) {
    case QUERY:
      return action.query;
    default:
      return query;
  }
};

export default reducer;
