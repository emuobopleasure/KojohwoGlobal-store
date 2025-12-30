import { useState, useCallback } from 'react';

const useNewsletter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const subscribe = async (email, name = '') => {
    setIsLoading(true);
    setMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim()
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setMessage(data.message || 'Successfully subscribed!');
        return { success: true };
      } else {
        setMessage(data.error || 'Something went wrong');
        return { success: false };
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  // Use useCallback to make clearMessage stable
  const clearMessage = useCallback(() => {
    setMessage('');
    setIsSuccess(false);
  }, []);

  return { subscribe, isLoading, message, isSuccess, clearMessage };
};

export default useNewsletter;