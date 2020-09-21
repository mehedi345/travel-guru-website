import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { CategoryContext } from '../../App';
import fakeData from '../fakeData/fakeData'
const Search = () => {
    const [categories, setCategories] = useContext(CategoryContext);
    const place = fakeData.find(data => data.name === categories);

    return (
          <div className="container search__container">
            <Navbar dark />
            <hr />
            <p style={{paddingTop:'15px'}}>252 stays Apr 13-17 3 guests</p>
            <h6 style={{paddingBottom:'25px'}}>Stay in {categories}</h6>
            <div className="row">
                <div className="col-md-6 hotel-container">
                    { place.hotels.map(hotel=>
                        <div className="hotel row">
                            <div className="col-md-6">
                                <img width="100%" src={hotel.image} alt=""/>
                            </div>
                            <div className="col-md-6">
                                <p className="hotel-name-title">{hotel.name}</p>
                                <p style={{ marginBottom: '11px' }}>4 guests   2 bedrooms   2 beds   2 baths</p>
                                <p style={{ marginBottom: '11px' }}>With Air conditioning Kitchen</p>
                                <p>Cancellation fexibility availiable</p>
                                <div className="hotel-star-cost">
                                
                                    <p className="rating">4.9(20)</p>
                                    <p className="cost"><span>$34/</span>night</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    );
};

export default Search;