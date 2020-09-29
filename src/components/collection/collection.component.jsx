import React from "react";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPage = ({ match, collection }) => {
  console.log(match.params.collectionId);
  console.log(collection);

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const matchStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(matchStateToProps)(CollectionPage);
