import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./Form.module.css";
import { useState } from "react";
import ReactModal from "react-modal";
import validation from "../Form/validation";
const { REACT_APP_TEMPLATE, REACT_APP_PUBLIC_ID, REACT_APP_SERVICE } =
  process.env;

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 130, left: 0, behavior: "auto" });
  }, []);
  const form = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const openModal = (message) => {
    setModalMessage(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  //
  //
  //

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xf4w6mt",
        "template_tlt69s4",
        form.current,
        "1JvIzZUMSo9sa07ae"
      )
      .then(
        (result) => {
          //console.log(result.text);
          openModal("Mensaje enviado correctamente");
        },
        (error) => {
          //console.log(error.text);
          openModal("Intentelo nuevamente");
        }
      );
    e.target.reset();
  };
  const [form1, setForm1] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm1({ ...form1, [id]: value });
    setErrors(
      validation({
        ...form1,
        [id]: value,
      })
    );
  };
  console.log("error en form?", errors,  errors.user_email, errors.user_name, errors.message);
  return (
    <main>
      <>
        <section class={style.sectionContact}>
          <div class={style.container}>
            <h1>Contactame!</h1>
            <p>
              Email sera enviado a oscarwarrieta@gmail.com, Gracias por
              contactarme. Por favor, complete el siguiente formulario.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div class={style.formGroup}>
                <label htmlFor="user_name">Nombre completo*</label>
                {<p className={style.error}>{errors.name && errors.name}</p>}
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className={style.formElement}
                  placeholder="Nombre Completo"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={style.formGroup} hidden={true}>
                <label HtmlFor="subject">Asunto*</label>

                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={"Rick And Morty App"}
                  className={style.formElement}
                  placeholder="Asunto"
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="user_email">Email*</label>
                <p className={style.error}>{errors.user_email && errors.user_email}</p>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className={style.formElement}
                  placeholder="john.doe@example.com"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={style.formGroup}>
                <label HtmlFor="company">Empresa</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className={style.formElement}
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className={`${style.formGroup} ${style.full}`}>
                <label htmlFor="message">Tu mensaje aqui:</label>
                <p className={style.error}>
                  {errors.message && errors.message}
                </p>
                <textarea
                  name="message"
                  id="message"
                  className={style.formElement}
                  placeholder="Espacio para tu mensaje...."
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              {(errors.disabled ) ?  (
                <p className={style.errorForm}>⚠️ Datos incompletos! ⚠️</p>
              ) : (
                <p className={style.validForm}>Todo en orden! ✔️</p>
              )}
              <div className={style.submitGroup}>
                <input
                  className={style.btn}
                  disabled={errors.disabled ? "disabled" : false}
                  type="submit"
                  value="ENVIAR"
                />
              </div>
            </form>
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className={style.modal}
            >
              <h2 className={style.textModal}>
                {modalMessage === "Mensaje enviado correctamente"
                  ? "Gracias por contactarme"
                  : "Algo ha salido mal... "}
              </h2>
              <p className={style.textModal}>{modalMessage}</p>
              <button onClick={closeModal} className={style.SaveButton}>
                Aceptar
              </button>
            </ReactModal>
          </div>
        </section>
      </>
    </main>
  );
};

export default Contact;
