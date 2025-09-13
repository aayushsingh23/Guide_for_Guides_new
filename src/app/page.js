"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="css-global w-embed">
        <style dangerouslySetInnerHTML={{
          __html: `
            @media screen and (min-width:1205px) {
              body {
                font-size: 16px;
              }
            }
            .shadow-hover {
              transition: all .5s ease-in-out;
            }
            .arrow-img {
              transition: all .5s ease-in-out .25s;
            }
            .xpl-img:hover .shadow-hover {
              top: 0%;
            }
            .xpl-img:hover .arrow-img {
              opacity: 100%;
            }
            .header {
              background-image: url("/assets/643af6c505f1d176c5142a6d/643af6c505f1d17c2e142aae_pexels-elia-clerici-912110.jpg");
              background-position: 50%;
              background-size: cover;
              padding-bottom: 0;
              position: relative;
            }
            .section-hero {
              margin-top: 0;
              position: relative;
            }
          `
        }} />
      </div>

      <header className="header">
        <div className="navbar w-nav" data-animation="default" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease" role="banner">
          <div className="nav-container w-container">
            <Link href="/" className="brand-2 w-nav-brand">
              <Image
                src="/assets/643af6c505f1d176c5142a6d/643b14c761e751d78580af4e_WhatsApp_Image_2023-04-16_at_02.42.58-removebg-preview (1).png"
                alt="Guide for Guides Logo"
                width={130}
                height={600}
                className="logo"
                loading="lazy"
                sizes="(max-width: 767px) 29vw, (max-width: 1279px) 110px, 130px"
              />
            </Link>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="nav-menu-left">
                <a href="#About-us" className="nav-menu-link w-nav-link">About Us</a>
                <Link href="/directory" className="nav-menu-link w-nav-link">Our Guides</Link>
                <a href="#FAQs" className="nav-menu-link w-nav-link">FAQs</a>
                <a href="#Contact-US" className="nav-menu-link w-nav-link">Contact Us</a>
              </div>
              <div className="nav-menu-right">
                <Link href="/signup-guide" className="button bg-pink w-button">I&apos;m a Guide</Link>
              </div>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="line-icon">
                <div className="line-top"></div>
                <div className="line-mid"></div>
                <div className="line-bot"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-hero wf-section">
          <div className="hero-parent">
            <div className="container container-hero w-container">
              <div>
                <div className="hero-header">
                  <h1 className="hero-head txt-white">Plan your dream vacation with our Guides</h1>
                </div>
                <div className="hero-content-parent">
                  <div className="hero-content txt-white"></div>
                </div>
                <div className="custom-input"></div>
              </div>
              <Link href="/signup" className="button bg-pink lock w-button">Get Started</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="section first-section wf-section">
        <div className="container w-container">
          <div className="testimony-parent">
            <div className="testtim-child">
              <div className="testimony">
                &quot;At Guide For Guides, we understand that travel is a personal and transformative experience.
                That&apos;s why we go the extra mile to ensure that every trip is seamless, safe, and tailored to our client&apos;s needs.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-grey py-0 wf-section">
        <div className="container slide-container w-container">
          <div className="section-title-wrapper">
            <h1 id="About-us" className="content-head">Explore Our Project</h1>
            <div className="text-content-parent">
              <div className="content-txt">
                &quot;Dive into this hassle-free vision of travel. Have a look at the catalogue of highly experienced expert travel guides
                and cut short on the stresses of traversing in an unknown land. Let us guide you to guides that aid your experience
                on your next dream vacation.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section wf-section">
        <div className="container w-container">
          <div className="testimony-parent">
            <div className="testimony-child overflow">
              <Image
                src="/assets/643af6c505f1d176c5142a6d/643b1717a8f56c3dc86ff1d9_photo-1500835556837-99ac94a94552.jpg"
                alt="Travel Photo"
                width={590}
                height={400}
                className="testimony-img"
                loading="lazy"
                sizes="(max-width: 767px) 90vw, (max-width: 1439px) 45vw, 590px"
              />
            </div>
            <div className="testimony-child">
              <div className="left">
                <h1 className="content-head">Who are we and What do we do?</h1>
                <div className="content-txt">
                  Guide For Guide is a dynamic and innovative travel guide company that is dedicated to helping travelers by
                  carefully finding them a travel guide that caters to our customers and lets them experience the world&apos;s most
                  captivating destinations. Our travel guides provide comprehensive and personalized itineraries that ensure
                  unforgettable journeys. They are carefully crafted to provide travelers with authentic and local experiences,
                  allowing them to truly connect with the people, culture, and natural beauty of each destination.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section wf-section">
        <div className="container w-container">
          <div className="play-video">
            <div className="vid-embed w-embed">
              <video autoPlay muted loop playsInline className="play-video">
                <source src="https://cdn.odama.io/shot/veeza/vid-bg-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="section overflow wf-section">
        <div className="container w-container">
          <div className="trusted-parent">
            <div className="people">
              <div className="w-layout-grid grid-people">
                <div className="people-1">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d1a4f5142aa8_Ellipse 657.png"
                    alt="Person"
                    width={100}
                    height={100}
                    className="img-1"
                    loading="lazy"
                  />
                </div>
                <div className="people-2">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d1efff142a9d_Ellipse 649.png"
                    alt="Person"
                    width={100}
                    height={100}
                    className="img-2"
                    loading="lazy"
                  />
                </div>
                <div className="people-3">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d1b089142a9f_Ellipse 650.png"
                    alt="Person"
                    width={100}
                    height={100}
                    className="img-3"
                    loading="lazy"
                  />
                </div>
                <div className="people-2">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d14cdd142aa5_Ellipse 651.png"
                    alt="Person"
                    width={100}
                    height={100}
                    className="img-2"
                    loading="lazy"
                  />
                </div>
                <div id="w-node-eaa69698-d4d7-f9f5-433e-62813ef1935b-26142a74" className="people-1">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d15e5a142aa2_Ellipse 652.png"
                    alt="Person"
                    width={100}
                    height={100}
                    className="img-1"
                    loading="lazy"
                  />
                </div>
                <div id="w-node-65ef7d4b-8f98-676c-c4b0-371e8916324e-26142a74" className="people-2">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d12ea5142a9e_Ellipse 653.png"
                    alt="Person"
                    width={100}
                    height={100}
                    className="img-2"
                    loading="lazy"
                  />
                </div>
                <div id="w-node-0b3b5e40-b754-949c-2fe0-e0e14c8259ec-26142a74" className="people-3">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d16eb8142a9a_Ellipse 654.png"
                    alt="Person"
                    width={100}
                    height={100}
                    className="img-3"
                    loading="lazy"
                  />
                </div>
                <div className="people-2">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d1c394142aa6_Ellipse 655.png"
                    alt="Person"
                    width={100}
                    height={100}
                    className="img-2"
                    loading="lazy"
                  />
                </div>
                <div className="people-1">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d14495142aa9_Ellipse 656.png"
                    alt="Person"
                    width={100}
                    height={100}
                    className="img-1"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="people-head">
              <h1 id="FAQs" className="content-head-people">FAQs</h1>
            </div>
            <div className="txt-parent"></div>
          </div>
        </div>
        <div className="text-block-2">
          <strong>Q1). How much does it cost to hire a travel guide from your company?<br /><br /></strong>
          <span>
            A: Our pricing depends on various factors such as the destination, duration of the trip, number of travelers,
            and specific services requested. Please contact our customer service team or refer to our website for detailed
            pricing information.<br /><br />
            <strong>Q2). Are your travel guides local experts?<br /><br /></strong>
            A: Yes, our travel guides are local experts with in-depth knowledge of the destinations they cover.
            They are trained professionals who are passionate about travel and have extensive experience in guiding
            travelers to make the most of their trip.<br /><br />
            <strong>Q3). What is your cancellation and refund policy?<br /><br /></strong>
            A: Our cancellation and refund policy may vary depending on the type of service and destination.
            Please refer to our terms and conditions or contact our customer service team for detailed information.
          </span>
        </div>
      </div>

      <footer id="footer" className="footer wf-section">
        <div className="container w-container">
          <div className="footer-flex-container">
            <div className="footer-top">
              <div className="fot-head-parent">
                <h1 className="fot-head txt-white">Need Help?</h1>
              </div>
              <div className="hover">
                <a href="#" className="link w-inline-block">
                  <h1 className="hovwer-txt txt-white">Get in touch</h1>
                </a>
                <a href="mailto:aayush.singh@gmail.com?subject=I%20need%20Help!%20XD" className="arrow w-inline-block">
                  <Image
                    src="/assets/643af6c505f1d176c5142a6d/643b10cd47b29d7fbee1eaec_Screenshot_2023-04-16_022929-removebg-preview.png"
                    alt="Arrow"
                    width={100}
                    height={100}
                    className="image-3"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div id="Contact-US" className="footer-bottom">
              <a href="#" className="link-block w-inline-block">
                <Image
                  src="/assets/643af6c505f1d176c5142a6d/643af6c505f1d10c7e142aa1_logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="logo"
                  loading="lazy"
                />
              </a>
              <div className="fot-right">
                <h2 className="footer-txt">
                  Hostel -J,<br />
                  Thapar Institute of Engineering and technology, <span>Patiala</span>, India<br />
                </h2>
                <div className="footer-item-mid txt-white">
                  <div className="item-1">
                    <a href="tel:+919958467077" className="footer-txt-no txt-white">+91 9958467077</a>
                  </div>
                  <div className="item-2">
                    <a href="mailto:aayush.singh@gmail.com" className="footer-txt-no txt-white">aayush.singh@gmail.com</a>
                  </div>
                </div>
                <div className="footer-item txt-white">
                  <div className="list-1">
                    <a href="#About-us" className="footer-txt-no txt-white">About Us</a>
                  </div>
                  <div className="list-1">
                    <a href="#Contact-US" className="footer-txt-no txt-white">FAQs</a>
                  </div>
                  <div className="list-1">
                    <a
                      href="https://docs.google.com/document/d/1AtwEW8VERaUYuocu-EmHwEhBlfBnYNhsYBYunwEcVzE/edit?usp=sharing"
                      className="footer-txt-no txt-white"
                    >
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottom">
        <div className="container w-container">
          <div className="fot-bot txt-white">
            <h1 className="boto-txt boto-txt-left">SINCE. 2023</h1>
            <h1 className="boto-txt">© 2022 Copyright Error 212</h1>
            <h1 className="boto-txt boto-txt-right">TERM, PRIVACY POLICY</h1>
          </div>
        </div>
      </div>

      <div className="custom-input"></div>
    </>
  );
}
