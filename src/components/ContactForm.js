export default function ContactForm() {
    return (
        <div className="contact_form_container">
            <div className='contact_form_container_sub_container'>
                <div className="contact_form_container_sub_container_message">
                    <h3>
                        Por favor, déjanos tus datos y <span>te contactaremos en seguida.</span>
                    </h3>
                    <p>
                        “Mira de cerca el presente que estás construyendo, porque debe parecerse al futuro con el que sueñas.”
                    </p>
                    <span className="contact_form_container_sub_container_message_author">Alice Walker, escritora.</span>
                </div>
                <form className="contact_form_container_sub_container_form">
                    <h3>Contáctanos</h3>
                    <div className="contact_form_container_sub_container_form_row1 row">
                        <FormInput name="Nombre" type="text" />
                        <FormInput name="Apellido" type="text" />
                    </div>
                    <div className="contact_form_container_sub_container_form_row2 row">
                        <FormInput name="Correo electrónico" type="text" />
                    </div>
                    <div className="contact_form_container_sub_container_form_row3 row">
                        <FormInput name="N° telefónico" type="text" />
                        <FormInput name="Linked In" type="text" isOptional={true} />
                    </div>
                    <div className="contact_form_container_sub_container_form_row4 row">
                        <FormInput name="Empresa" type="text" />
                        <FormInput name="Cargo" type="text" />
                    </div>
                    <button>
                        <span>Enviar</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

function FormInput({ name, type, isOptional = false }) {
    return (
        <div className="input">
            <div className="input_name">
                {name}
                {isOptional && <span> (Opcional)</span>}
            </div>
            <input type={type} />
        </div>
    )
}