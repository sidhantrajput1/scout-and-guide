import React from 'react'

import logo from '../assets/logo.png'
import traning from  '../assets/training.jpg'
import self_defence from '../assets/self_defence.jpg'
import digital_learning from '../assets/digital_learning.jpg'
import outer_campus from '../assets/outer_campus.jpg'
import '../cascading/home.css'

export default function Home() {
  return (
    <>
        <section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" className='logo'/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-4">
                            <li class="nav-item">
                                <a class="nav-link text-dark" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">AboutUS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Programs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Schools</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Volunteer</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Donation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">ContactUs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

        <section className='container-fluid d-flex' id="intro">
            <div className='col-md-8 col-12 mx-auto my-auto' style={{paddingBottom:"12vw"}}>
                <h1 className='text-warning bebas-neue-regular text-center' style={{paddingTop:"8vh"}}>Welcome to Scout & Guide Trust</h1>
                <h4 className='text-white text-center'>Empowering students with leadership, skill development & digital education for a brighter future!</h4>
            </div>
        </section>

        <section className='container-fluid px-4'>
            <div className='col-12  mt-2 mb-4 py-5 bg-primary border border-2 mx-auto' id="infobox" style={{borderRadius:"60px"}}>
                <div className='col-11 mx-auto row'>
                    <div className='col-md-4 text-center py-md-1 py-3 text-white'>
                        <h1 className='fw-bold'>500+</h1>
                        <h4 className='text-uppercase'>School</h4>
                    </div>
                    <div className='col-md-4 text-center py-md-1 py-3  text-white'>
                        <h1 className='fw-bold'>10,000+</h1>
                        <h4 className='text-uppercase'>Students</h4>
                    </div>
                    <div className='col-md-4 text-center py-md-1 py-3  text-white'>
                        <h1 className='fw-bold'>200+</h1>
                        <h4 className='text-uppercase'>Volunteers</h4>
                    </div>
                </div>
            </div>
        </section>

        <section className='container-fluid py-4 overflow-hidden px-0'>
            <div className='container'>
                <h1 className='text-center mb-3 fw-bold text-primary'>Skills And Training Offered</h1>
                <div className='row justify-content-between d-flex'>
                <div class="card mx-md-0 mx-auto my-2" style={{width:"17rem",height:"auto"}}>
                            <img src={traning} class="card-img-top" alt="..."/>
                            <div className='d-flex card-body text-center'>
                                <div class="my-auto mx-auto">
                                    <h5 class="card-title fw-bold">Scout & Guide Training </h5>
                                </div>
                            </div>
                    </div>
                    <div class="card mx-md-0 mx-auto my-2" style={{width:"17rem",height:"auto"}}>
                            <img src={self_defence} class="card-img-top" alt="..."/>
                            <div className='d-flex card-body text-center'>
                                <div class="my-auto mx-auto">
                                    <h5 class="card-title fw-bold">Self-Defense</h5>
                                </div>
                            </div>
                    </div>
                    <div class="card mx-md-0 mx-auto my-2" style={{width:"17rem",height:"auto"}}>
                            <img src={digital_learning} class="card-img-top" alt="..."/>
                            <div className='d-flex card-body text-center'>
                                <div class="my-auto mx-auto">
                                    <h5 class="card-title fw-bold">Digital Learning</h5>
                                </div>
                            </div>
                    </div>
                    <div class="card mx-md-0 mx-auto my-2" style={{width:"17rem",height:"auto"}}>
                            <img src={outer_campus} class="card-img-top" alt="..."/>
                            <div className='d-flex card-body text-center'>
                                <div class="my-auto mx-auto">
                                    <h5 class="card-title fw-bold">Outdoor Camps</h5>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
