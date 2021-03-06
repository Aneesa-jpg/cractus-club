import { createSelector } from "reselect";

const selectShop = (state) => state.shop;
console.log(selectShop);

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []

  //The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => (collections ? collections[collectionUrlParam] : null)
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );
