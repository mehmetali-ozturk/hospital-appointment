import React, { useState } from 'react';

const Login = () => {
    const [userType, setUserType] = useState('patient'); // 'patient' or 'doctor'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Type:', userType);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 shadow-xl w-96 border border-white/20">
                <h2 className="text-3xl font-bold text-center mb-6 text-white">Hastane Giriş</h2>
                <div className="flex justify-center space-x-4 mb-6">
                    <button
                        type="button"
                        onClick={() => setUserType('patient')}
                        className={`px-4 py-2 rounded-lg transition duration-200 ${
                            userType === 'patient' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                    >
                        Hasta
                    </button>
                    <button
                        type="button"
                        onClick={() => setUserType('doctor')}
                        className={`px-4 py-2 rounded-lg transition duration-200 ${
                            userType === 'doctor' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                    >
                        Doktor
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-white font-medium">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder={userType === 'patient' ? 'hasta@email.com' : 'doktor@hastane.com'}
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-white font-medium">Şifre:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
                    >
                        {userType === 'patient' ? 'Hasta Girişi' : 'Doktor Girişi'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/register" className="text-white hover:underline text-sm">
                        Hesabınız yok mu? Kayıt olun
                    </a>
                </div>
                <div className="mt-2 text-center">
                    <a href="/forgot-password" className="text-white hover:underline text-sm">
                        Şifrenizi mi unuttunuz?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;