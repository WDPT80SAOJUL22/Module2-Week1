import {Component} from 'react'

class ClassGreetings extends Component {
    render(){
        return (
            <div>
            <p>Hello, {this.props.name}</p>
            <p>You have {this.props.age} years</p>
        </div>
        )
    }
}

export default ClassGreetings