import React from 'react'

// const CounterScreen = (props) => {
//     return (
//         <div>
//             <h1>{props.kota}</h1>
//             <h1>{props.nama}</h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component {
    state = {
        countera: 0,
        counterb: 0,
        counterc: 0,
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm">
                        <h1>{this.state.countera}</h1>
                        <input className="btn btn-warning" type="button" onClick={() => this.setState({ countera: this.state.countera + 1 })} value="+" />
                        <input className="btn btn-dark" type="button" onClick={() => this.setState({ countera: this.state.countera - 1 })} value="-" />
                    </div>
                    <div className="col-sm">
                        <h1>{this.state.counterb}</h1>
                        <input className="btn btn-warning" type="button" onClick={() => this.setState({ counterb: this.state.counterb + 1 })} value="+" />
                        <input className="btn btn-dark" type="button" onClick={() => this.setState({ counterb: this.state.counterb - 1 })} value="-" />
                    </div>
                    <div className="col-sm">
                        <h1>{this.state.counterc}</h1>
                        <input className="btn btn-warning" type="button" onClick={() => this.setState({ counterc: this.state.counterc + 1 })} value="+" />
                        <input className="btn btn-dark" type="button" onClick={() => this.setState({ counterc: this.state.counterc - 1 })} value="-" />
                    </div>
                </div>
                <h1>All</h1>
                <input className="btn btn-warning" type="button" onClick={() => this.setState({ countera: this.state.countera + 1, counterb: this.state.counterb + 1, counterc: this.state.counterc + 1 })} value="+" />
                <input className="btn btn-dark" type="button" onClick={() => this.setState({ countera: this.state.countera - 1, counterb: this.state.counterb - 1, counterc: this.state.counterc - 1 })} value="-" />
                <br />
                <input className="btn btn-primary" type="button" onClick={() => this.setState({ countera: 0, counterb: 0, counterc: 0 })} value="Reset ALL" />
            </div>
        )
    }
}

export default CounterScreen



