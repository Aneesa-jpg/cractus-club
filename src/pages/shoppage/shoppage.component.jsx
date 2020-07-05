import React from 'react'
import {CollectionPreview} from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shopPage'

class ShopPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render()
    {   
       return (
            <div className='shop-page'>
                {this.state.collections.map(({id, ...otherSectionProps}) => 
                <CollectionPreview key={id} {...otherSectionProps} /> )}
            </div>
            )
    }
  
}

export default ShopPage;