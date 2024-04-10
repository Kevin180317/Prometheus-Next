const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/formulario", async (req, res) => {
  let { name, email, asunto } = req.body;

  let transporter = nodemailer.createTransport({
    host: "prometheustij.com", // reemplaza esto con tu host
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "contact@prometheustij.com", // tu correo electrónico
      pass: "GoJo5628@!", // your email password
    },
  });

  const mailOptions = {
    from: "contact@prometheustij.com", // sender address
    to: email, // list of receivers
    // cc: "contact@prometheustij.com",
    subject: "Informacion de Contacto", // Subject line
    text: `Hola, Gracias por contactarnos. Hemos recibido la siguiente información de tu parte:
  
    Nombre: ${name}
    Correo electrónico: ${email}
    Asunto: ${asunto}
  
    Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo lo antes posible.
  
    Gracias, El equipo de Prometheus`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error al enviar el correo electrónico: " + err);
      res
        .status(500)
        .send({ error: "Ocurrió un error al enviar el correo electrónico." });
    } else {
      console.log("Correo electrónico enviado: " + info.response);
      res
        .status(200)
        .send({ message: "Correo electrónico enviado con éxito." });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
