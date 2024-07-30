export const  generateEVisaId= ()=> {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
      } else {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
    }
    return result;
  }
  