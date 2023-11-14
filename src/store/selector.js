const listSelector = (store) => store.list;

export const listInitialSelector = (store) => listSelector(store)?.allIds || [];

export const listByIdSelector = (store, id) => {
  const listStore = listSelector(store);

  if (!listStore) {
    return {};
  }

  const listItem = listStore.id;

  return {
    ...listItem,
    id,
  };
}
export const listsSelector = (store) =>
  listInitialSelector(store).map((id) => listByIdSelector(store, id));