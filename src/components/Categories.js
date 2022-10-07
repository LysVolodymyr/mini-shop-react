import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'mac-book',
                    name: 'Mac-book'
                },
                {
                    key: 'imac',
                    name: 'iMac'
                },
                {
                    key: 'mac-mini',
                    name: 'Mac-mini'
                }
            ]
        }
    }
  
    render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories