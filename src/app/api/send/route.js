import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_UuuaGHXi_La9ghC2DRT66QabC2C8ZQT5i');

export async function POST(req, res) {
  const { name, mail, message } = await req.json();
  try {
    const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'contact@prometheustij.com',
        subject: 'New message from ' + name,
        html: 'Mail : ' + mail + '<br>Message : ' + message,
      });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}