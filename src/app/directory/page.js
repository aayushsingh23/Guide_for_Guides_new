"use client";

import Link from "next/link";

export default function Directory() {
  const guides = [
    { id: 1, name: "Siddhant Gaitonde", language: "Marathi", phone: "+91 XXXXXXXX89" },
    { id: 2, name: "Aayush Patel", language: "Gujarati", phone: "+91 XXXXXXXX29" },
    { id: 3, name: "Devansh", language: "Tamil", phone: "+91 XXXXXXXX71" },
    { id: 4, name: "Uttkarsh", language: "Kannada", phone: "+91 XXXXXXXX78" },
    { id: 5, name: "Sovan Chakraborty", language: "Bengali", phone: "+91 XXXXXXXX58" },
    { id: 6, name: "Ravinder Pal Sodhi", language: "Punjabi", phone: "+91 XXXXXXXX58" },
    { id: 7, name: "Satish Tiwari", language: "Hindi", phone: "+91 XXXXXXXX58" },
    { id: 8, name: "Parvez Rasool", language: "Urdu", phone: "+91 XXXXXXXX58" },
    { id: 9, name: "Apuia Ralte", language: "Manipur", phone: "+91 XXXXXXXX58" },
    { id: 10, name: "Venkatesh Iyer", language: "Kerala", phone: "+91 XXXXXXXX58" },
  ];

  return (
    <>
      <style jsx>{`
        table, tr, td, th {
          border: 1px solid black;
          border-collapse: collapse;
        }
        
        table {
          width: 80%;
          height: 30%;
          text-align: middle;
          margin-top: 0%;
          margin-left: auto;
          margin-right: auto;
        }
        
        td {
          vertical-align: middle;
          padding: 10px;
        }
        
        th {
          padding: 10px;
          background-color: #f2f2f2;
        }
        
        h1 {
          text-align: center;
        }
        
        .pay-button {
          padding: 5px;
          transition: background-color 0.5s;
          transition: color 0.5s;
          background-color: #eb4c60;
          color: white;
          border: none;
          border-radius: 3px;
          text-decoration: none;
          display: inline-block;
        }
        
        .pay-button:hover {
          background-color: black;
          color: white;
        }
        
        .phone {
          color: rgb(14, 14, 203);
        }
      `}</style>

      <br /><br />
      <h1>GUIDE DIRECTORY</h1>
      
      <table>
        <thead>
          <tr>
            <th>SR.NO</th>
            <th>NAME</th>
            <th>LANGUAGE</th>
            <th>PHONE NUMBER</th>
            <th>PAY</th>
          </tr>
        </thead>
        <tbody>
          {guides.map((guide) => (
            <tr key={guide.id}>
              <td>{guide.id}</td>
              <td><b>{guide.name}</b></td>
              <td><b>{guide.language}</b></td>
              <td className="phone"><b>{guide.phone}</b></td>
              <td>
                <Link href="/payment" className="pay-button">
                  PAY
                </Link>
                &nbsp;&nbsp;FOR CONTACT DETAILS
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
