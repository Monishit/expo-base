export const maskPhoneNumber = (phoneNumber: string): string => {
    if (typeof phoneNumber !== 'string' || phoneNumber.length < 5) return '*****';
    
    const cleanNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digits
    const firstThree = cleanNumber.slice(0, 3);
    const lastTwo = cleanNumber.slice(-2);
    const maskedLength = Math.max(cleanNumber.length - 5, 0);
    
    return `${firstThree}${'*'.repeat(maskedLength)}${lastTwo}`;
  };