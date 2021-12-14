
const showAlert = (label) => {
    alert(`A label desse botão é ${label}`)
}

export const Button = ({label}) => {
    
    return (

        <button className='alertButton' onClick={() => showAlert(label)}></button>
    )
}