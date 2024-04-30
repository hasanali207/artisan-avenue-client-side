// Footer.js
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <footer className="footer mt-10  text-black p-10 bg-slate-100">
  <nav>
    <h6 className="footer-title">Artisan Avenue</h6> 
    <a className="link link-hover">Word First Class Art & Craft Services.</a>
    
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Contact</h6> 
    <a className="link link-hover">Gulshan 1, Dhaka-1212</a>
    <a className="link link-hover">Email: ArtisnaAvenue@gmail.com</a>
    <a className="link link-hover">Phone: +88018654874</a>
  </nav> 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>


</footer>

{/* bottom Footer */}
<footer className="footer items-center text-white p-4 bg-slate-500 ">
  <aside className="items-center grid-flow-col">
    
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col text-xl text-white gap-4 md:place-self-center md:justify-self-end">
    <a>
      <FaFacebook></FaFacebook>
    </a>
    <a> <FaGithub></FaGithub></a>
    <a><FaLinkedin></FaLinkedin></a>
  </nav>
</footer>

</>
  );
}

export default Footer;
