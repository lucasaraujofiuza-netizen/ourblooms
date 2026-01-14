import image from '../assets/Hero/Image.png'
import image1 from '../assets/Hero/Image-1.png'
import image2 from '../assets/Hero/Image-2.png'

function Hero(){
    return(
        <>
        <picture>
            <source media="(min-width: 1200px)" srcSet={logo} />
            <source media="(min-width: 800px)" srcSet={logo1} />
            <img src={logo2} alt="Ourblooms Logo" />
        </picture>

        <picture>
            <source media="(min-width: 1200px)" srcSet={image} />
            <source media="(min-width: 800px)" srcSet={image1} />
            <img src={image2} alt="Ourblooms Logo" />
        </picture>




        </>
    )
}
export default Hero;


