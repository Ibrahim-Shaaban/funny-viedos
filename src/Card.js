import React from 'react' ;

const Card = ({children}) => {
    return (
        <div className="card" style = {{padding:10}}>
            {children}
        </div>
    )
}
export default Card;