"use client";

import Link from "next/link";

export default function SignupGuide() {
    return (
        <>
            <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          background-image: url('/logo.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .container {
          background-color: white;
          border-radius: 10px;
          padding: 20px;
          margin: auto;
          margin-top: 50px;
          max-width: 500px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-top: 10px;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 20px;
          border: 1px solid #eb4c60;
        }

        input[type="submit"],
        .submit-button {
          background-color: #eb4c60;
          color: #fff;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.5s;
          text-decoration: none;
          text-align: center;
          display: block;
        }

        input[type="submit"]:hover,
        .submit-button:hover {
          background-color: black;
        }
      `}</style>

            <div className="container">
                <h1>Join the platform as a Guide</h1>
                <form>
                    <label htmlFor="Full Name">Name:</label>
                    <input type="text" id="username" placeholder="Enter full name" name="username" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your work email" name="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter desired password" required />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />

                    <Link href="/" className="submit-button">
                        JOIN
                    </Link>
                </form>
            </div>
        </>
    );
}
