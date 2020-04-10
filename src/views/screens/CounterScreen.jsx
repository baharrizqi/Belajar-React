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
    render() {
        return (
            <div>
                <h1>{this.props.kota}</h1>
                <h1>{this.props.nama}</h1>
            </div>
        )
    }
}

export default CounterScreen



