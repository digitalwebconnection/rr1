export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the lifestyle and architecture of rrealtor Studio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="bg-muted rounded-lg h-96 lg:h-full flex items-center justify-center">
              <img
                src="/apartment-interior-1.png"
                alt="Spacious living room with modern furnishing"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
            <img
              src="/modern-apartment-bedroom.png"
              alt="Comfortable bedroom with natural light"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
            <img
              src="/modern-apartment-kitchen.png"
              alt="Modern modular kitchen"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
            <img
              src="/swimming-pool-residential-complex.jpg"
              alt="Swimming pool and recreational area"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
            <img
              src="/landscaped-garden-residential.jpg"
              alt="Landscaped gardens and green spaces"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
            <img
              src="/residential-building-exterior-architecture.jpg"
              alt="rrealtor Studio building exterior"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
