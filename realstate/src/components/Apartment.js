import React from 'react'
import Flat1 from '../assets/Flat1.jpg'
import Flat2 from '../assets/Flat2.jpg'
import Flat3 from '../assets/Flat3.jpg'

const Apartment = () => {
    return (
        <>
            <section className='grid'>
                <h3>We have apartments at different locations.Have a look!</h3>
                <div className='grid-items'>
                    <div>
                        <img src={Flat3} alt="Flat3" />
                        <h4>Flat at Delhi</h4>
                        <p>Lorem ipsum dolor sit amet. Ut galisum quis hic explicabo cumque et numquam molestiae cum consectetur illum qui commodi dolores ut dolor quia sed quas iusto! In debitis reprehenderit sit architecto possimus aut impedit voluptas eos repudiandae quae in necessitatibus iusto.
                        </p>
                    </div>
                    <div >
                        <img src={Flat1} alt="Flat1" />
                        <h4>Flat at Lucknow</h4>
                        <p>Lorem ipsum dolor sit amet. Ut galisum quis hic explicabo cumque et numquam molestiae cum consectetur illum qui commodi dolores ut dolor quia sed quas iusto! In debitis reprehenderit sit architecto possimus aut impedit voluptas eos repudiandae quae in necessitatibus iusto.
                        </p>

                    </div>
                    <div >
                        <img src={Flat2} alt="Flat2" />
                        <h4>Flat at Mumbai</h4>
                        <p>Lorem ipsum dolor sit amet. Ut galisum quis hic explicabo cumque et numquam molestiae cum consectetur illum qui commodi dolores ut dolor quia sed quas iusto! In debitis reprehenderit sit architecto possimus aut impedit voluptas eos repudiandae quae in necessitatibus iusto.
                        </p>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Apartment