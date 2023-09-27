import React from 'react'

const Condition = ({props}) => {
  return (
    <article>
        <div className="condition">
            <div className="title">
                <h3>{props.title}</h3>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
        </div>
    </article>
  )
}

export default Condition