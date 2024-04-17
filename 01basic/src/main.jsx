import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotheruser = 'Nayan'

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', targrt: '_blank'},
    'Click to visit Google',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(


    reactElement

)
