import React, { useState, useEffect } from 'react';
import useNewsletter from '../hooks/useNewsletter';

const NewsletterForm = ({ 
  showName = false, 
  className = '',
  placeholder = 'Enter your email'
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { subscribe, isLoading, message, isSuccess, clearMessage } = useNewsletter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    const result = await subscribe(email, name);
    
    if (result.success) {
      setEmail('');
      setName('');
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        clearMessage();
      }, 5000);
    }
  };

  // Fix: Include clearMessage in dependency array
  useEffect(() => {
    return () => clearMessage();
  }, [clearMessage]); // Added dependency

  return (
    <div className={`newsletter-form ${className}`}>
      <div className="flex flex-col space-y-4">
        {showName && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your names (optional)"
            className="input input-bordered w-full"
            disabled={isLoading}
          />
        )}

        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="input input-bordered flex-1"
            required
            disabled={isLoading}
          />
          <button 
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={isLoading || !email.trim()}
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>

        {/* Status Messages */}
        {message && (
          <div className={`alert ${isSuccess ? 'alert-success' : 'alert-error'} text-sm`}>
            <span>{message}</span>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-500 mt-3">
        By subscribing, you agree to receive emails from Kojohwo Global.
      </p>
    </div>
  );
};

export default NewsletterForm;