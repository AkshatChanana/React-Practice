function ColorBtn({ color }: any) {
    console.log(color)
    switch (color) {
        case "Yellow":
        case "Pink":
        case "Lavender":
        case "White": return (<button className="btn" style={{ backgroundColor: `${color}`, color: 'black' }} onClick={()=>ChangeBgColor(`${color}`)}>{color}</button>)
        default: return (<button className="btn" style={{ backgroundColor: `${color}`, color: 'white' }} onClick={()=>ChangeBgColor(`${color}`)}>{color}</button>)

    }
}
function ChangeBgColor(color: string){
    let body = document.querySelector('body')
    if(body) body.style.backgroundColor = color
}

export default ColorBtn