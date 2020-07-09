import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss'

export const CollectionPreview = ({title,items}) => {
    return (
        <div className='collection-preview'>
            <div className='title'>
                <h1>{title.toUpperCase()}</h1>
            </div> 
            <div className='preview'>
                {
                    items.filter((item,index) => index<4 ).map((item) => 
                        <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}
