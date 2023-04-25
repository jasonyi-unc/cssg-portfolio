import './Block.css';


function Block(props) {
    return (
        <div>

            <div className="RowDiv">
                <div className="LeftDiv">
                    <h3>{props.title}</h3>
                    <ul>
                        <li>{props.descrip1}</li>
                        <li>{props.descrip2}</li>
                        <li>{props.descrip3}</li>
                    </ul>
                </div>
                <div className="RightDiv">
                    <p>{props.timeframe}</p>
                </div>
            </div>

        </div>
    )
}


export default Block;
