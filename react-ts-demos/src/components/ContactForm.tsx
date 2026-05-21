import { useRef, useState, type SubmitEventHandler } from "react";
import type { ContactForm } from "../interfaces";

const ContactForm = () => {
  const [contactFormState, setContactFormState] = useState<ContactForm | null>(
    null,
  );
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const handleSubmit: SubmitEventHandler = (e) => {
    e.preventDefault();

    setContactFormState({
      name: name.current?.value || "",
      email: email.current?.value || "",
      phone: phone.current?.value || "",
      subject: subject.current?.value || "",
      message: message.current?.value || "",
    });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Provide your name"
        ref={name}
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Provide your email"
        ref={email}
      />
      <br />
      <input
        type="text"
        name="subject"
        placeholder="Provide your subject"
        ref={subject}
      />
      <br />
      <input
        type="text"
        name="phone"
        placeholder="Provide your phone number"
        ref={phone}
      />
      <br />
      <textarea
        name="message"
        placeholder="Provide your message here"
        ref={message}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
    <div className="contact-form-state">
      <p>name: {contactFormState?.name}</p>
      <p>email: {contactFormState?.email}</p>
      <p>subject: {contactFormState?.subject}</p>
      <p>phone: {contactFormState?.phone}</p>
      <p>message: {contactFormState?.message}</p>
    </div>
    </>
  );
};

export default ContactForm;
