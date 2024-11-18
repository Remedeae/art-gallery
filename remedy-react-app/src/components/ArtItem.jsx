

function artItem(props) {
    return (
        <div>
            <img src="" alt="" />
            <h2 className="titel">{props.titel}</h2>
            <div className="info">
                <div>
                    <h3>Anno:</h3>
                    <p>{props.year}</p>
                </div>
                <div>
                    <h3>Technique:</h3>
                    <p>{props.technique}</p>
                </div>
            </div>
            <p className="description">{props.description}</p>

        </div>
    );
}

export default artItem;