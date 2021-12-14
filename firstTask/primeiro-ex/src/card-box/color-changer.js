
export default function ColorChanger ({children}) {

    return (
        <div className='colorChanger' style={{ color: 'orange' }}>
            {children.toUpperCase()}
        </div>
    )
}