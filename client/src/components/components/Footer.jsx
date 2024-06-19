

function Footer() {
    return (
      <div className="container my-3">
        <footer className="text-center text-lg-start text-black">
          <div className="container ">
            <section>
              <div className="row">
                <div className="col-lg-2">
                  <h5 className="text-uppercase"  >Socials</h5>
                </div>
  
                <div className="col-lg-1">
                  <ul className="list-unstyled mb-0 text-black">
                    <li>
                      <a href="https://www.instagram.com/sadaf._khn/" target="_blank">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="img"  ></img>
                      </a>
                    </li>
                  </ul>
                </div>
  
                <div className="col-lg-6">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="https://www.facebook.com/zaraf.khan/" target="_blank">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"  alt="Instagram" className="img" ></img>
                      </a>
                    </li>
                  </ul>
                </div>
  
              </div>
            </section>
          </div>
  
          <div className="text-end footercopyright col-12 mb-0">
            ©Work By Sadaf Khan:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    );
  }
  
export default Footer