export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how FrixAI Africa is transforming healthcare delivery across the continent
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-dark-light p-6 rounded-xl border border-primary/20">
            <p className="text-gray-300 mb-4">
              "The AI analysis has significantly improved our diagnostic accuracy and reduced the time needed for fracture assessment. A game-changer for our rural clinic."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100"
                alt="Doctor"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary"
              />
              <div className="ml-4">
                <p className="font-semibold text-white">Dr. Sarah Mensah</p>
                <p className="text-gray-400">Chief Radiologist, Ghana</p>
              </div>
            </div>
          </div>
          <div className="bg-dark-light p-6 rounded-xl border border-primary/20">
            <p className="text-gray-300 mb-4">
              "Being able to get AI-powered second opinions has enhanced our confidence in diagnosis, especially in complex cases."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100"
                alt="Doctor"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary"
              />
              <div className="ml-4">
                <p className="font-semibold text-white">Dr. John Okafor</p>
                <p className="text-gray-400">Orthopedic Surgeon, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="bg-dark-light p-6 rounded-xl border border-primary/20">
            <p className="text-gray-300 mb-4">
              "The platform's ability to work with our existing equipment and provide rapid results has made it an invaluable tool for our hospital."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100"
                alt="Doctor"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary"
              />
              <div className="ml-4">
                <p className="font-semibold text-white">Dr. Amina Hassan</p>
                <p className="text-gray-400">Medical Director, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}