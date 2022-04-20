import React from 'react'

function Header() {
    return (
        <>

            <header class="w3-display-container w3-content w3-wide" style={{maxWidth:"1500px"}} id="home">
                <img class="w3-image" src="https://www.w3schools.com/w3images/architect.jpg" alt="Architecture" style={{width:"1500",height:"800"}}/>
                    <div class="w3-display-middle w3-margin-top w3-center">
                        <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>BR</b></span> <span class="w3-hide-small w3-text-light-grey">Architects</span></h1>
                    </div>
            </header>


            

        </>
    )
}

export default Header