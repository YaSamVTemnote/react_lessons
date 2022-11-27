import React from "react";


class Name extends React.Component {
    render() {
        const {userName} = this.props
        return (
            <>
                <div>Hello {userName}</div>
            </>
        )
    }
}

export default Name
