import React from 'react'

function Home() {
    return (
        <>

            <div class="page-content-wrapper">

                <div class="container">
                    <div class="tiny-slider-two-wrapper">
                        <div class="tiny-slider-two">
                           
                            <div>
                                <div class="single-hero-slide bg-img bg-overlay" style={{backgroundImage: 'url("img/bg-img/31.jpg")'}}>
                                    <div class="h-100 d-flex align-items-center">
                                        <div class="slide-text">
                                            <h3 class="text-white">Bootstrap 5</h3>
                                            <p class="text-white">Build fast, responsive sites with Bootstrap.</p><a class="btn btn-creative btn-warning" href="#">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           
                            
                            
                           
                            
                           
                        </div>
                       
                       
                    </div>
                </div>
                <div class="pt-3"></div>
                <div class="container direction-rtl">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-4">
                                    <div class="feature-card mx-auto text-center">
                                        <div class="card mx-auto bg-gray"><img src="img/demo-img/pwa.png" alt=""/></div>
                                        <p class="mb-0">PWA Ready</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="feature-card mx-auto text-center">
                                        <div class="card mx-auto bg-gray"><img src="img/demo-img/bootstrap.png" alt=""/></div>
                                        <p class="mb-0">Bootstrap 5</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="feature-card mx-auto text-center">
                                        <div class="card mx-auto bg-gray"><img src="img/demo-img/js.png" alt=""/></div>
                                        <p class="mb-0">Vanilla JS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            

        </>
    )
}

export default Home