import Formulario from "./Formulario"
import "../../assets/style/ContactUs/ContactBody.css"




function ContactBody() {
    return (
      <section className='ContactBody'>
        <div className="title-contact"><h3>CONTACT US</h3></div>
        <div className="formulario-img"><Formulario></Formulario><div className="img-contact"></div></div>
        
      </section>
    );
  }
  export default ContactBody;