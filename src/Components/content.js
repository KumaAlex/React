

export function Content({arr}) {
    let arr2 = []
    for(let i of arr){
        arr2.push(<div>{i}</div>)
    }
    return (
        <div>
            <h2>CONTENT</h2>
            {arr2} 
            
        </div>
    );
}