import React, { useContext } from 'react';
import Mapped from './Mapped';

import fakeData from '../fakeData/fakeData'




import { useLocation } from 'react-router-dom';

const Search = () => {
    const location = useLocation()
    const locateData = location.search.split('=')
    const data = fakeData.find(pd => pd.id == locateData[1]);




    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/home"><img style={{ width: '100px' }} src='https://i.ibb.co/9GcFB6q/Logo.png' alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto" style={{ color: 'white' }}>
                        <li>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/home">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>


                    </ul>

                </div>
            </nav>



            <h3 style={{ textAlign: 'center' }}>Welcome to {data.title}</h3>
            <p style={{ textAlign: 'center' }}>{data.extra}</p>


            <br />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={data.img1} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{data.p1}</h5>
                                        <p class="card-text">4 guest 2 bath 2 beds</p>
                                        <p class="card-text">wifi Air Conditioning kitchen</p>
                                        <p class="card-text">All high facilities</p>
                                        <p class="card-text">$60/night</p>


                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={data.img2} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{data.p2}</h5>

                                        <p class="card-text">4 guest 2 bath 2 beds</p>
                                        <p class="card-text">wifi Air Conditioning kitchen</p>
                                        <p class="card-text">All high facilities</p>
                                        <p class="card-text">$40/night</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={data.img3} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{data.p3}</h5>

                                        <p class="card-text">4 guest 2 bath 2 beds</p>
                                        <p class="card-text">wifi Air Conditioning kitchen</p>
                                        <p class="card-text">All high facilities</p>
                                        <p class="card-text">$50/night</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                   
                </div>

            </div>




        </div>