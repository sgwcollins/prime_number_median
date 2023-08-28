import logo from './touchbistro.png'

export const Logo = () => {
    return (
        <div
            className="bg-cover bg-center h-12 w-96"
            style={{ backgroundImage: `url(${logo})` }}
       />

    )
}