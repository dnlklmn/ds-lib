import React from 'react'

interface Props {
    name?:string
}

export const Example = ({name}:Props) => {
return <p>Hey, my name is {name}!</p>
}

Example.defaultProps = {
    name: 'Name'
}