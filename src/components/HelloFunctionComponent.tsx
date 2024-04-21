import React from 'react';

interface HelloFunctionComponentProps {
    name?: any;
}
//
// function HelloFunctionComponent({name}: HelloFunctionComponentProps) {
//     return (
//         <div>
//             <h1>Hello {name} From Function Component</h1>
//         </div>
//     );
// };

const HelloFunctionComponent = ({name}: HelloFunctionComponentProps) => {
    return (
        <div>
            <h1>Hello {name} From Function Component</h1>
        </div>
    );
}

export default HelloFunctionComponent;