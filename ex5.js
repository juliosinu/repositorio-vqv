const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  setTimeout(() => {
    const temperatureMars = getMarsTemperature();
    console.log(`Mars temperature is: ${temperatureMars} degree Celsius`);
  }, messageDelay());
} 

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

