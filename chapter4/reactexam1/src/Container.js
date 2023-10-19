const Container = ({children}) => {
    console.log(children);
    return (
        <div style={{ margin: 20, padding: 10, border:"1px solid gray"}}>
            {children}
        </div>
    )
}

export default Container;