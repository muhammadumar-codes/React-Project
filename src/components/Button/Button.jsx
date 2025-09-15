import "./Button.css"
export default function Buttton  ({children, ...prop}){
    return (
        <>
        {console.log(prop)}
        <button {...prop}>{children}</button>        
        </>
    )
}