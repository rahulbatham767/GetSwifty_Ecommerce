import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const [formValues, setFormValues] = useState({
    username: isAuthenticated ? user.name : "",
    email: isAuthenticated ? user.email : "",
    message: "",
  });

  // Step 2: Create the onChange handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, // Update the specific form field
    });
  };
  return (
    <Wrapper>
      <h2>Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7157.759284523856!2d78.16920000000002!3d26.233100000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700112456104!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        title="map"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="container">
        <div className="card">
          <span className="title">Leave a Comment</span>
          <form
            className="form"
            action="https://formspree.io/f/xpzgerkj"
            method="POST"
          >
            <div className="group">
              <input
                placeholder=""
                type="text"
                name="username"
                className="fs-3"
                required
                autoComplete="off"
                value={formValues.username}
                onChange={handleChange}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="group">
              <input
                placeholder=""
                type="email"
                id="email"
                className="fs-3"
                name="email"
                required=""
                autoComplete="off"
                value={formValues.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="group">
              <textarea
                placeholder=""
                id="comment"
                name="message"
                className="fs-3"
                rows="5"
                required=""
                value={formValues.message}
                onChange={handleChange}
                autoComplete="off"
              ></textarea>
              <label htmlFor="comment">Enter Your Message</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 350px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  .form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .group {
    position: relative;
  }

  .form .group label {
    font-size: 14px;
    color: rgb(99, 102, 102);
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  .form .group input,
  .form .group textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    outline: 0;
    width: 100%;
    background-color: transparent;
  }

  .form .group input:placeholder-shown + label,
  .form .group textarea:placeholder-shown + label {
    top: 10px;
    background-color: transparent;
  }

  .form .group input:focus,
  .form .group textarea:focus {
    border-color: #3366cc;
  }

  .form .group input:focus + label,
  .form .group textarea:focus + label {
    top: -10px;
    left: 10px;
    background-color: #fff;
    color: #3366cc;
    font-weight: 600;
    font-size: 14px;
  }

  .form .group textarea {
    resize: none;
    height: 100px;
  }

  .form button {
    background-color: #3366cc;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .form button:hover {
    background-color: #27408b;
  }

  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: #fff;
            border: 1px solid rgb(98 84 243);
            color: rgb(98 84 243);
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact;
