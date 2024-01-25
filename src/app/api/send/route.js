export const POST = async (req, res) => {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Aquí puedes agregar el código para enviar el correo electrónico con NodeMailer

    res.status(200).json({ message: 'Email received' });
  } else {
    res.status(405).json({ message: 'We only accept POST' });
  }
}