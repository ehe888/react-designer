// TickerContainer.js
import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import { connect } from 'react-redux'
import 'react-table/react-table.css'


const PAIR_EXCHANGE_RATE = [
    {
        "exchange":"BITS","market":"ETH\/BTC",
        "last_trade":"0.0836000100", "change": '0.0515',
        "high_trade":"0.0840000000",
        "low_trade":"0.0753200200","current_volume":"35639.9835000000",
        "timestamp":"2018-01-09 21:07:36","ask":"0.0836398700","bid":"0.0836000100"},
    {
        "exchange":"BITS","market":"BTC\/USD", 
        "last_trade":"14781.0100000000", "change": '-0.0112',
        "high_trade":"15367.1800000000","low_trade":"14123.9700000000",
        "current_volume":"13057.9884000000","timestamp":"2018-01-09 21:07:37",
        "ask":"14787.6100000000","bid":"14781.0000000000"
    }]


    const columns = [{
        Header: 'Pair',
        accessor: 'market', // String-based value accessors!
        maxWidth: 60,
      }, {
        Header: 'Price',
        accessor: 'last_trade',
        maxWidth: 120,
        Cell: (props) => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        Header: 'Change',
        accessor: 'change',
        maxWidth: 80,
        Cell: (row) => {
                return (
                    <span>
                        <span style={{
                        color: row.value < 0 ? '#ff2e00'
                            : row.value === 0 ? '#ffbf00'
                            : '#57d500',
                        transition: 'all .3s ease'
                        }}>
                        &#x25cf;
                        </span> 
                        { (Math.round(row.value * 10000) / 100.0).toFixed(2).padStart(8) + "%"  }
                    </span>
                )
            }
      }]

class TickerContainer extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    static defaultProps = {
        data: []
    }

    render() {
        const { data } = this.props
        return (
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={100}
                showPagination={false}
                className="-striped -highlight"
                style={{ 
                    fontSize: '0.75em',
                    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
                    fontWeight: 300,
                    height: '100%',
                }}
                getTdProps={() => {
                    return {
                        style: {
                          padding: '0 3px',
                          lineHeight: '1.6em',
                          textAlign: 'right',
                        }
                      }
                }}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.app.exchange && state.app.exchange.ticker 
    }
}

export default connect(mapStateToProps, null)(TickerContainer)