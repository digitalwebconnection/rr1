export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <img
                src="https://static.wixstatic.com/media/17b30c_dbde2f463c7c4f458435f8c914c8ceda~mv2.png/v1/fill/w_980,h_291,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RRealtors_logo%20(2).png"
                alt="R Realtors Logo"
                className="w-40"
              />
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Premium 4 & 5 BHK apartments in Ahmedabad with world-class amenities and
              prime connectivity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#why-choose" className="hover:opacity-100 transition-opacity">
                  Why Choose
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:opacity-100 transition-opacity">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="hover:opacity-100 transition-opacity">
                  Location
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:opacity-100 transition-opacity">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="tel:+917211161521"> Phone: +91-7211161521</a>
              </li>
              <li>
                <a href="mailto:info@rrealtorstudio.com">
                  {" "}
                  Email: info@rrealtorstudio.com
                </a>
              </li>
              <li>Address: Gala Gymkhana Road, South Bopal Ahmedabad</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>RERA Registration</li>
              <li>Terms & Conditions</li>
              <li>
                <a
                  href="/privacy"
                  className="hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </a>
              </li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>
            © 2025 rrealtor Studio. All rights reserved. *Terms & Conditions Apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
