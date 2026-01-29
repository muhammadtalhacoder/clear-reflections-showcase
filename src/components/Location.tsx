import { MapPin, Clock, Car } from "lucide-react";

export const Location = () => {
  return (
    <section id="location" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Find Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Visit Our <span className="text-gradient-gold">Showroom</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience our mirrors in person at our elegant showroom. Our experts are ready 
            to help you find the perfect reflection for your space.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-elegant h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99012492346979!3d40.74844097138964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clear Reflections Showroom Location"
            />
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Our Address</h3>
                  <address className="text-muted-foreground not-italic leading-relaxed">
                    123 Mirror Boulevard<br />
                    Crystal City, NY 10001<br />
                    United States
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Business Hours</h3>
                  <div className="text-muted-foreground space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-foreground">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-foreground">11:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Parking</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Free parking available for customers. Enter through the main entrance 
                    on Mirror Boulevard. Wheelchair accessible.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=40.748441,-73.985664"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent text-accent-foreground text-center py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
