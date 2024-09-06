function customRender(rElement, root){
    let name = 'akshat'
    let domElement = document.createElement(rElement.type)
    domElement.innerHTML = `hello ${name}`
    // domElement.setAttribute('href',rElement.props.href)
    // domElement.setAttribute('target',rElement.props.target)
    for (const prop in rElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop, rElement.props[prop])
    }
    root.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children : 'Click me to visit google'
}
const mainRoot = document.getElementById('root')

customRender(reactElement, mainRoot)