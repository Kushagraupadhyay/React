function customerRender(reactElement,container){
    /*
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   domElement.setAttribute('href',reactElement.props.href)
   domElement.setAttribute('target',reactElement.props.target)
   container.appendChild(domElement) // append child function renders the react like element in corresponding DOM 
   */

   // the below code is an optimization of above code snippet
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) { // prop is key of the attribute props
        if (prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])  // this will loop through all the props
    }
    container.appendChild(domElement)  // then appending the element in the domelement - container where we want to inject


}

const reactElement = {  // storing object inside a variable which we will be injecting in root
    type:'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customerRender(reactElement,mainContainer)  // method that takes what we want to inject & where do we want to inject



