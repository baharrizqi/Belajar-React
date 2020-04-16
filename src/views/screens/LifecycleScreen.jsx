import React from 'react'

class LifecycleScreen extends React.Component {
    componentDidMount() {
        alert('Halo kawan')
    }

    render() {
        return(
            <div>
                <h1>LifecycleScreen</h1>
            </div>
        )
    }
}
export default LifecycleScreen