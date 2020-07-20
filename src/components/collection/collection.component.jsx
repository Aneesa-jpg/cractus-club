import React from 'react'

import {connect} from 'react-redux'

import {selectCollection} from '../../redux/shop/shop.selector'

import './collection.styles.scss'

const CollectionPage = ({match, collection}) => {

    console.log(match.params.collectionId);
    console.log(collection);
    return (
        <div className='collection=overview'>
            <h1>Collection Page</h1>
            
        </div>
    )
}

const matchStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(matchStateToProps)(CollectionPage)
