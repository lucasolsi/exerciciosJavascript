import React from "react";

function childrenIncludeProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(
            child, {...props, ...child.props}
        )
    })

}

export default props => <div>
    <h1>{props.name} {props.lastName}</h1>
    <h2>Sons</h2>
    <ul>
        {/*{props.children}*/}
        {childrenIncludeProps(props)}
    </ul>
</div>