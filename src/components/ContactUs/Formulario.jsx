import '../../assets/style/ContactUs/formulario.css'




function formulario() {
    return (
        <form className="formulario" action="">
            <label for="username">Nombre</label>
            <input type="text" placeholder="Nombre" />
            <label for="username">E-mail</label>
            <input type="text" placeholder="E-mail" />
            <label for="username">Comentario</label>
            <textarea name="mensaje" id="" placeholder="Mensaje" cols="30" rows="10"></textarea>
            <input type="submit" />
        </form>
    );
  }
  export default formulario;