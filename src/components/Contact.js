import React from 'react';
import useWindowSize from './Window';
import Link from 'next/link';

export default function Contact() {

  const { width, height } = useWindowSize();

  return (
    <section className={`${width > height ? "pv-w5" : "pv-h5"} gray`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12 caret-hide">
            <div className="digi-contact-left">
              <h2 className={`fl fc-o pb-4 ${width > height ? "fs-w-80" : "fs-h-80"}`}>
                Dive into design inspiration
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="position-relative">
              <ul className="list-unstyled d-none d-xl-block m-0">
                <li></li>
                <li></li>
              </ul>
              <form>
                <div className="row">
                  <div className="col-12 col-md-9">
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`mb-2 fl fc-g ${width > height ? "fs-w-20 bhk-form-w" : "fs-h-20 bhk-form-h"}`}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9">
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`mb-2 fl fc-g ${width > height ? "fs-w-20 bhk-form-w" : "fs-h-20 bhk-form-h"}`}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9">
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`mb-2 fl fc-g ${width > height ? "fs-w-20 bhk-form-w" : "fs-h-20 bhk-form-h"}`}
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9">
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`mb-2 fl fc-g ${width > height ? "fs-w-20 bhk-form-w" : "fs-h-20 bhk-form-h"}`}
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9">
                    <div className={`d-flex justify-content-center w-100 ${width > height ? "pv-w1" : "pv-h1"}`}>
                      <Link legacyBehavior href="">
                        <a className={`btn-main-b w-100 text-center fl ${width > height ? "p-w-1 fs-w-20" : "p-h-1 fs-h-20"}`}>Visit experience centre</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
