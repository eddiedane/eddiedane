import { transporter } from '@/lib/mailer';
import { NextResponse } from 'next/server';
import { isEmail } from 'validator';

export async function POST(request: Request) {
  const { name, email, subject, message, company } = await request.json();
  const { __found, ...errorFields } = validateData({ name, email, subject, message, company });

  if (__found) {
    return NextResponse.json({ errors: errorFields }, { status: 400 });
  }

  try {
    const from = `${name} <${
      process.env.NODE_ENV === 'production' ? process.env.EMAIL_ADDR : email
    }>`;

    await transporter.sendMail({
      from,
      to: process.env.EMAIL_ADDR,
      subject,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
      html: `<table><tr><td>Name</td><td>${name}</td></tr><tr><td>Company</td><td>${company}</td></tr><tr><td>Email</td><td>${email}</td></tr></table><p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}

const validateData = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
}) => {
  const errors: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    company?: string[];
    __found: boolean;
  } = { __found: false };

  if (!data.name) {
    errors.name = ['Name is required'];
    errors.__found = true;
  }

  if (data.name.length < 2) {
    errors.name = ['Name must be at least 2 characters'];
    errors.__found = true;
  }

  if (data.company.length > 50) {
    errors.company = ['Company must be at most 50 characters'];
    errors.__found = true;
  }

  if (data.name.length > 50) {
    errors.name = ['Name must be at most 50 characters'];
    errors.__found = true;
  }

  if (!data.email) {
    errors.email = ['Email is required'];
    errors.__found = true;
  }

  if (!isEmail(data.email)) {
    errors.email = ['Email is invalid'];
    errors.__found = true;
  }

  if (!data.subject) {
    errors.subject = ['Subject is required'];
    errors.__found = true;
  }

  if (data.subject.length < 10) {
    errors.subject = ['Subject must be at least 10 characters'];
    errors.__found = true;
  }

  if (data.subject.length > 100) {
    errors.subject = ['Subject must be at most 100 characters'];
    errors.__found = true;
  }

  if (!data.message) {
    errors.message = ['Message is required'];
    errors.__found = true;
  }

  if (data.message.length > 2500) {
    errors.message = ['Message must be at most 2500 characters'];
    errors.__found = true;
  }

  if (data.message.length < 50) {
    errors.message = ['Message must be at least 50 characters'];
    errors.__found = true;
  }

  return errors;
};
