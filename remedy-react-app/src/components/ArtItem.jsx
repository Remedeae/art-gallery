import './ArtItem.css';

function artItem(props) {
    return (
        <div className='container'>
            <img src={props.image} alt={props.imgAlt} className="image" />
            <h2 className="titel">{props.titel}</h2>
            <div className="info">
                <div>
                    <h3>Technique:</h3>
                    <p>{props.technique}</p>
                </div>
                <div>
                    <h3>Price:</h3>
                    <p>{props.price}</p>
                </div>
            </div>
            <p className="description">{props.description}</p>

        </div>
    );
}

export default artItem;