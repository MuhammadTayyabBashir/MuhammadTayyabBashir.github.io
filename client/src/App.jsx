import React, { useState, useEffect } from 'react';

const ComingSoonPage = () => {
  // Set the launch date to end of 2025
  const launchDate = new Date('2025-12-31T23:59:59').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-bg-light via-yellow-50 to-bg-light dark:from-bg-dark dark:via-yellow-900/10 dark:to-bg-dark transition-colors duration-300">
      <div className="max-w-2xl w-full text-center p-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-border dark:border-border-dark">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3">
            <img src="../assets/logo.png" alt="Solo3School Logo" className="h-12 w-auto" />
          </div>
          <div className="mt-2 text-lg text-text-primary dark:text-text-dark">
            Innovative Learning Platform
          </div>
        </div>
        
        {/* Coming Soon Message */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text-primary dark:text-text-dark mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-text-light dark:text-gray-400 max-w-md mx-auto">
            We're working hard to bring you an amazing learning experience. Stay tuned!
          </p>
        </div>
        
        {/* Countdown Timer */}
        <div className="mb-10">
          <h3 className="text-xl text-text-light dark:text-gray-400 mb-6">Launching In</h3>
          <div className="flex justify-center space-x-4">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-700 rounded-lg p-4 w-20 h-20 flex items-center justify-center border border-yellow-200 dark:border-yellow-700/30 shadow-sm">
                <span className="text-3xl font-bold text-text-primary dark:text-text-dark">{timeLeft.days}</span>
              </div>
              <span className="text-sm text-text-light dark:text-gray-400 mt-2">Days</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-700 rounded-lg p-4 w-20 h-20 flex items-center justify-center border border-yellow-200 dark:border-yellow-700/30 shadow-sm">
                <span className="text-3xl font-bold text-text-primary dark:text-text-dark">{timeLeft.hours}</span>
              </div>
              <span className="text-sm text-text-light dark:text-gray-400 mt-2">Hours</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-700 rounded-lg p-4 w-20 h-20 flex items-center justify-center border border-yellow-200 dark:border-yellow-700/30 shadow-sm">
                <span className="text-3xl font-bold text-text-primary dark:text-text-dark">{timeLeft.minutes}</span>
              </div>
              <span className="text-sm text-text-light dark:text-gray-400 mt-2">Minutes</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-700 rounded-lg p-4 w-20 h-20 flex items-center justify-center border border-yellow-200 dark:border-yellow-700/30 shadow-sm">
                <span className="text-3xl font-bold text-text-primary dark:text-text-dark">{timeLeft.seconds}</span>
              </div>
              <span className="text-sm text-text-light dark:text-gray-400 mt-2">Seconds</span>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="pt-6 border-t border-yellow-200 dark:border-yellow-700/30">
          <p className="text-text-light dark:text-gray-400">
            Launching by the end of 2025 - Get ready for an innovative educational platform!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;