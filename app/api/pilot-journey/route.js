import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, email, journey } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Pilot Journey" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Pilot Journey Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><strong>Journey:</strong> ${journey}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response("Email failed", { status: 500 });
  }
}
