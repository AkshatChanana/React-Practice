import { useState } from "react"

function ColorBtn({ color }: any) {
    console.log(color)
    let [bgColor, setColor] = useState('white')
    let body = document.querySelector('body')
    if(body) body.style.backgroundColor = bgColor
    
    switch (color) {
        case "Yellow":
        case "Pink":
        case "Lavender":
        case "White": return (<button className="btn" style={{ backgroundColor: color, color: 'black' }} onClick={()=>setColor(color)}>{color}</button>)
        default: return (<button className="btn" style={{ backgroundColor: color, color: 'white' }} onClick={()=>setColor(color)}>{color}</button>)

    }
}


export default ColorBtn