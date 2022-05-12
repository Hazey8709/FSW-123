//!         Cards.JS   PAGE

//! First Way to do it (But  couldn't change color  separately per card )

const Card = (props) => {
    return (
        <div className='card'>
            <div className='cardBody'>
                {/* {props.bgColor} */}
                <h2 className='card-title'>{props.title}</h2>
                <h4 className='card-subTitle'>{props.subTitle}</h4>
                <hr />
                <p className='card-description'>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;

// //!  Second Way
// const Card = () => {
//     return (
//         <div className='card'>
//             <div className='cardContainer-1'>
//                 <div className='cardBody-1'>
//                     <h2 className='card-title'>Title-1</h2>
//                     <h4 className='card-subTitle'>Sub-Title-1</h4>
//                     <hr />
//                     <p className='card-description'>Hello World-1</p>
//                 </div>
//             </div>

//             <div className='cardContainer-2'>
//                 <div className='cardBody-1'>
//                     <h2 className='card-title'>Title-2</h2>
//                     <h4 className='card-subTitle'>Sub-Title-2</h4>
//                     <hr />
//                     <p className='card-description'>Hello World-2</p>
//                 </div>
//             </div>

//             <div className='cardContainer-3'>
//                 <div className='cardBody-1'>
//                     <h2 className='card-title'>Title-3</h2>
//                     <h4 className='card-subTitle'>Sub-Title-3</h4>
//                     <hr />
//                     <p className='card-description'>Hello World-3</p>
//                 </div>
//             </div>

//             <div className='cardContainer-4'>
//                 <div className='cardBody-1'>
//                     <h2 className='card-title'>Title-4</h2>
//                     <h4 className='card-subTitle'>Sub-Title-4</h4>
//                     <hr />
//                     <p className='card-description'>Hello World-4</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;
