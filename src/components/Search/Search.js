import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import fakeData from './fakeData'
const Search = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div style={{backgroundImage: 'none'}}>
            <p style={{color: 'gray', fontSize: '18px', marginLeft: '10px', marginTop: '10px'}}> 256 Stays in Sep 17th 8 guests </p>
            <h4 style={{color: 'black', fontSize: '28px', marginLeft: '10px'}}> <strong >Stay in Cox's Bazar</strong> </h4>
            <div className="col-md-8 mt-5 flex">
                { fakeData.map(info =>
                        <div key={info.id} className="card mb-3" style={{ maxWidth: '800px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={info.HotelImg} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{info.HotelName}</h5>
                                        <p className="card-text">{info.HotelBody}</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>


    );
};

export default Search;