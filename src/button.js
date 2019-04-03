import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timesClicked: 0
        }

        this.increaseTimesClicked = this.increaseTimesClicked.bind(this)
    }

    increaseTimesClicked() {
        const { timesClicked } = this.state
        this.setState({ timesClicked: timesClicked + 1 })

        this.props.onClick()
    }

    render() {
        const { timesClicked } = this.state

        return (
            <button onClick={this.increaseTimesClicked}>
                {timesClicked} times clicked!
            </button>
        )
    }
}

Button.defaultProps = {
    onClick: () => console.log('<Button/> clicked.')
}

Button.propTypes = {
    onClick: PropTypes.func
}

