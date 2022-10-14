import {LazyLoadImage} from "react-lazy-load-image-component";

const CityImage = ({img, status}) =>{
        return (
            <div className="cities__body__image">
                <LazyLoadImage src={img} alt={img}/>
                <div className={status === 'popular' ? 'bestselling'
                    : status === 'new' ? 'new'
                        : status === 'Hot' ? 'hot'
                            : ''}>
                    {status}
                </div>
            </div>
        )
}

export default CityImage;
