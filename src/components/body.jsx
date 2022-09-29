import logo from '../assets/img/Logo.svg'
import '../assets/style/body.css'
import Titles from "../components/bodyComponents/titulos"
import Redes from "../components/bodyComponents/redes"


function body() {
  return (
    <section className='body'>
        <div><div className='title-center'><Titles></Titles></div></div>
        <Redes></Redes>
    </section>
  );
}
export default body;