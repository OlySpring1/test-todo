import { Action } from 'redux';

const QUERY = 'QUERY';

export const setQuery = (query: string) => (
  {
    type: QUERY,
    query,
  }
);

type setQuery = Action<typeof QUERY> & {
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
