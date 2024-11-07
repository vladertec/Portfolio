"use client"

import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const ContactPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [status, setStatus] = useState("")

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  })

  const handleSubmit = async (values, { resetForm }) => {
    setStatus("Sending...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (res.ok) {
        setStatus("Message sent successfully!")
        resetForm()
      } else {
        setStatus("Error sending message.")
      }
    } catch (error) {
      setStatus("Error sending message.")
    }
  }

  return (
    <div ref={ref} className={`contact ${inView ? "visible" : ""}`}>
      <h1 className="contact__title">SEND ME MESSAGE</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="contact__form">
          <div className="contact__field contact__field--name">
            <Field
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact__input"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="contact__error"
            />
          </div>
          <div className="contact__field contact__field--email">
            <Field
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact__input"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="contact__error"
            />
          </div>
          <div className="contact__field contact__field--phone">
            <Field
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="contact__input"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="contact__error"
            />
          </div>
          <div className="contact__field contact__field--message">
            <Field
              as="textarea"
              name="message"
              placeholder="Your Message"
              className="contact__input contact__input--textarea"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="contact__error"
            />
          </div>
          <button type="submit" className="contact__button">
            SEND MESSAGE
          </button>
        </Form>
      </Formik>
      <p className="contact__status">{status}</p>
    </div>
  )
}

export default ContactPage
