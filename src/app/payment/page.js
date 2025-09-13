"use client";

import Link from "next/link";
import Image from "next/image";

export default function Payment() {
  return (
    <>
      <style jsx>{`
        .form_form {
          text-align: center;
          margin-top: 50px;
        }
        
        .payment-container {
          max-width: 500px;
          margin: 50px auto;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        
        h1 {
          text-align: center;
          margin-bottom: 30px;
        }
        
        input[type="text"],
        input[type="email"] {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #eb4c60;
          border-radius: 5px;
          box-sizing: border-box;
        }
        
        .pay-button {
          background-color: #eb4c60;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
          font-size: 16px;
          transition: background-color 0.5s;
        }
        
        .pay-button:hover {
          background-color: black;
        }
        
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>

      <div className="logo-container">
        <Link href="/">
          <Image src="/logo.jpg" alt="logo" width={200} height={150} />
        </Link>
      </div>

      <div className="payment-container">
        <h1>Payment Gateway</h1>
        <div className="form_form">
          <form>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter Name" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Enter Email" 
              required 
            />
            <button 
              type="submit" 
              className="pay-button"
            >
              Pay Now ₹5
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
