const getRandomInt = (min: any, max: any) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  
export const getRandomString = (length: any, base: any) => {
    let result = "";
    const baseLength = base.length;
  
    for (let i = 0; i < length; i++) {
      const randomIndex = getRandomInt(0, baseLength);
      result += base[randomIndex];
    }
  
    return result;
  };