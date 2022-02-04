import React from 'react'
import ReactDOM from 'react-dom';

const Content = (props) => {
    const data = props.data

    const children = data.map((elem, index) => {
        console.log("elem");
        console.log(elem.text);
        return React.createElement(
            elem.element,
            { key: index, className: 'greeting', id: elem.id, src: elem.src },
            elem.text
        );
    });
 
    return (
        <>
            {children}
        </>
    )
}

export default Content
