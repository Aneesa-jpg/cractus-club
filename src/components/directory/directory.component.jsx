import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectDirectorySection} from '../../redux/directory/directory.selector'

import MenuItem from '../menu-items/menu-items.component'
import './directory.styles.scss'

const Directory = ({sections}) => (
        <div className='directory'>
            {
              sections.map(({id, ...otherSectionProps}) => 
                <MenuItem key={id} {...otherSectionProps} /> )
            }
        </div>
)

const matchStateToProps = createStructuredSelector(
    {
      sections : selectDirectorySection
    }
)

  export default connect(matchStateToProps)(Directory);
