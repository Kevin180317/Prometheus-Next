import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    asunto: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://prometheustij.com/formulario", formData)
      .then((res) => {
        console.log("Response:", res);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Hubo un error al enviar el formulario.");
      });
    setFormData({
      name: "",
      email: "",
      asunto: "",
    });
    toast.success("Mensaje Enviado.");
  };

  return (
    <div className="items-center justify-center p-8" id="contact">
      <h1 className="text-6xl font-bold text-center">Metodo de contacto</h1>
      <div className="flex items-center justify-center mt-12">
        <section className="grid grid-cols-1 border md:w-[900px] md:h-[550px] gap-12  rounded-2xl p-8 md:grid-cols-2 bg-black text-white overflow-auto">
          <div className="flex flex-col justify-around gap-4 text-md md:text-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl text-center">Contacto</h1>
              <p className="text-2xl text-center">
                Estamos ansiosos por recibir tu mensaje. ¡Contáctanos ahora!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <AiOutlinePhone />
                <span>(669)-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineMail />
                <span>contact@prometheustij.com</span>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineHome />
                <span>Tijuana, Baja California</span>
              </div>
              <div className="flex items-center justify-start gap-8">
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="p-4 overflow-auto text-black bg-white rounded">
            <h1 className="text-xl text-center md:text-4xl">
              Formulario de contacto
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 py-2 text-md md:text-2xl">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ingresa tu nombre"
                  onChange={handleChange}
                  value={formData.name}
                  className="px-4 py-2 border rounded-xl"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ingresa tu correo electronico"
                  onChange={handleChange}
                  value={formData.email}
                  className="px-4 py-2 border rounded-xl"
                />
                <textarea
                  name="asunto"
                  id="asunto"
                  placeholder="Ingresa tu asunto"
                  onChange={handleChange}
                  value={formData.asunto}
                  className="px-4 py-2 border rounded-xl"
                />
                <button
                  className="py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-700"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
            <Toaster position="top-right" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default FormSection;
