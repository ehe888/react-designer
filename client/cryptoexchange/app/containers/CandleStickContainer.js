// CandleStickContainer.js

import React from 'react'
import CharComponent from '../components/CandleStickChartComponent'
import { getData } from "./CandelStickUtil"

class CandleStickContainer extends React.Component {
    componentDidMount() {
		getData().then((data) => {
            this.setState({ data })
            return
        })
        .catch(e => {
            console.log(e)
        })
    }
    
    render() {
        if (this.state == null) {
			return <div>Loading...</div>
        }
        
        return (
            <CharComponent data={this.state.data} />
        )
    }
}

export default CandleStickContainer