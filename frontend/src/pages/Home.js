import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: "Online Randevu",
      description: "Hızlı ve kolay bir şekilde randevu alın",
      icon: "🏥"
    },
    {
      title: "Uzman Doktorlar",
      description: "Alanında uzman doktor kadromuz",
      icon: "👨‍⚕️"
    },
    {
      title: "7/24 Hizmet",
      description: "Kesintisiz sağlık hizmeti",
      icon: "🕒"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/Hospital-exterior.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px)',
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative bg-blue-600/40 h-[500px]">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Sağlığınız İçin Buradayız</h1>
              <p className="text-xl mb-8">Modern tıp, uzman kadro ve kaliteli hizmet</p>
              <Link 
                to="/appointment" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Hemen Randevu Al
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100/80 backdrop-blur-sm py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Sağlık Hizmetlerimiz Hakkında Bilgi Alın</h2>
            <p className="text-gray-600 mb-8">
              Size en iyi hizmeti sunmak için buradayız
            </p>
            <div className="space-x-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                İletişime Geçin
              </Link>
              <Link 
                to="/services" 
                className="bg-white text-blue-600 px-6 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;