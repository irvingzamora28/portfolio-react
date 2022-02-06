import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';

const Content = (props) => {
    const data = props.data

    const children = data.map((elem, index) => {
        console.log("elem");
        console.log(elem.text);
        if (elem.element === "code") {
            return <p className="py-2">
                <CopyBlock
                    text={elem.text}
                    language={elem.language}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    wrapLines
                    theme={dracula}
                />
            </p>
        } else {
            return React.createElement(
                elem.element,
                { key: index, className: 'py-2', id: elem.id, src: elem.src },
                elem.text
            );
        }
    });

    return (
        <>
            {children}
        </>
    )
}

export default Content
