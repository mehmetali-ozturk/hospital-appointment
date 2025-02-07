import React, { useState } from 'react';

const Appointments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Örnek müsait zamanlar (gerçek uygulamada API'den gelecek)
  const availableSlots = {
    "2024-02-07": ["09:00", "09:30", "10:00", "10:30", "11:00", "14:00", "14:30", "15:00"],
    "2024-02-08": ["09:00", "09:30", "11:00", "11:30", "14:00", "14:30", "15:00"],
    "2024-02-09": ["10:00", "10:30", "11:00", "11:30", "14:00", "15:30", "16:00"],
  };

  const departments = [
    "Dahiliye",
    "Kardiyoloji",
    "Nöroloji",
    "Ortopedi",
    "Göz Hastalıkları"
  ];

  const doctors = {
    "Dahiliye": ["Dr. Mal Melih", "Dr. Muzaffer Yamuk"],
    "Kardiyoloji": ["Dr. Mehmet Ali", "Dr. Efe Götveren"],
    "Nöroloji": ["Dr. Göthan Tun", "Dr. Ve Sevgilisi"],
    "Ortopedi": ["Dr. Can Demir", "Dr. Elif Yalçın"],
    "Göz Hastalıkları": ["Dr. Deniz Arslan", "Dr. Büşra Çelik"]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      department: selectedDepartment,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime
    });
  };

  // Tarihi formatlama fonksiyonu
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <div className="min-h-screen relative">
      {/* Arkaplan blurlu yaptım bütün tasarım değişebilir belki */}
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

      {/* İçerik */}
      <div className="relative z-10 pt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Randevu Al</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* doktor ve bölüm seçimi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Bölüm Seçin
                  </label>
                  <select 
                    value={selectedDepartment}
                    onChange={(e) => {
                      setSelectedDepartment(e.target.value);
                      setSelectedDoctor('');
                      setSelectedDate('');
                      setSelectedTime('');
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Bölüm Seçiniz</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Doktor Seçin
                  </label>
                  <select 
                    value={selectedDoctor}
                    onChange={(e) => {
                      setSelectedDoctor(e.target.value);
                      setSelectedDate('');
                      setSelectedTime('');
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={!selectedDepartment}
                  >
                    <option value="">Doktor Seçiniz</option>
                    {selectedDepartment && doctors[selectedDepartment].map((doctor) => (
                      <option key={doctor} value={doctor}>{doctor}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* tarih ve zaman seçimi müsaitliğe göre şuan belirli müsaitlik zamanı var ama apiden çekeriz ilerde */}
              {selectedDoctor && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Uygun Tarih ve Saatler</h3>
                  
                  {Object.entries(availableSlots).map(([date, times]) => (
                    <div key={date} className="bg-white/50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-3">{formatDate(date)}</h4>
                      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                        {times.map((time) => (
                          <button
                            key={`${date}-${time}`}
                            type="button"
                            onClick={() => {
                              setSelectedDate(date);
                              setSelectedTime(time);
                            }}
                            className={`p-2 text-sm rounded-lg transition duration-200 ${
                              selectedDate === date && selectedTime === time
                                ? 'bg-blue-600 text-white'
                                : 'bg-white hover:bg-blue-50 text-gray-700'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* oluştur butonu */}
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className={`w-full py-3 rounded-lg transition duration-300 font-medium
                    ${selectedDate && selectedTime 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' 
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
                >
                Randevu Oluştur
                </button>   
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;