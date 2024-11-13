"use client"

import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"

const ContactPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [status, setStatus] = useState("")
  const router = useRouter()

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
      const result = await emailjs.send(
        "service_a7nlbge",
        "template_a21vh6v",
        {
          name: "vlad",
          email: "sarnavsk2001@gmail.com",
          message: `You have new message from portfolio website. User name - ${values.name}, user email - ${values.email}, user text - ${values.message}, user mobile phone - ${values.phone}, name - ${values.name}. Have a good day!`,
        },
        "b-9jRpofu0_GJSdEI"
      )

      if (result.status === 200) {
        setStatus("Message sent successfully!")
        resetForm()

        setTimeout(() => {
          router.push("/")
        }, 3000)
      } else {
        setStatus("Error sending message.")
      }
    } catch (error) {
      setStatus("Error sending message.")
    }
  }

  return (
    <div ref={ref} className={`contact ${inView ? "visible" : ""}`}>
      <h1 className="contact__title">SEND ME A MESSAGE</h1>
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
