//!         Cards.JS   PAGE

const Card = (props) => {
    return (
        <div className='card'>
            <div className='cardBody'>
                <h2 className='card-title'>{props.title}</h2>
                <h4 className='card-subTitle'>{props.subTitle}</h4>
                <hr />
                <p className='card-description'>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;
