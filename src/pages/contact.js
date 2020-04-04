import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `contact form`,
          `michelle wiltshire`,
          `ux design`,
          `psychology`
        ]}
        title="Contact"
      />
      <section>
        <form
          className="mx-auto md:w-1/2"
          method="POST"
          action="https://formspree.io/hello@michellewiltshire.com"
        >
          <h2 className=" text-center md:text-left py-6">Contact Form</h2>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="full-name"
          >
            Full Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="full-name"
            // placeholder="Bill"
            type="text"
            name="name"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Email Address
          </label>

          <input
            className="w-full mb-6 form-input"
            id="email"
            // placeholder="Murray"

            type="email"
            name="email"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="Hi! Talk to me."
            rows="8"
            name="Form-Message"
            maxLength="5000"
            data-name="Form-Message"
          />
          <div className="flex justify-center">
            <Button title="Send Form" />
          </div>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
