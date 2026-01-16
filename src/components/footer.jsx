import f from '../assets/footer/Footer.png'
import f1 from   '../assets/footer/Footer-1.png'
import f2 from '../assets/footer/Footer-2.png'
function footer(){
    return (
        <>
        <footer> 
          <picture>
                <source media = '(min-width:1200px)' srcSet={f}/>
                <source media = '(min-width:800px)' srcSet={f1}/>
                <img src={f2} alt = "footer image" />
            </picture>

        </footer>
        </>
    )
}
export default footer;