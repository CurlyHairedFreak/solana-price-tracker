import React from "react";

export default function Main() {
  // Set state for API price information
  const [solPrice, setSolPrice] = React.useState(null);

  // Set state for css text animation
  const [textAnimation, setTextAnimation] = React.useState(null);

  //  function that sets textAnimation to a className to start the text animation
  const animateText = () => {
    setTextAnimation("main--title_animation");
  };

  // Api call
  const apiUrl =
    "https://api.coingecko.com/api/v3/simple/price?ids=Solana&vs_currencies=Usd&precision=2";

  const getSolPrice = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      animateText();
      setSolPrice(data.solana.usd);
    } catch (error) {
      console.log(`Failed to fetch price of Solana: ${error.message}`);
    }
  };

  React.useEffect(() => {
    getSolPrice();
    const interval = setInterval(() => {
      getSolPrice();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main>
      <div className="main--wrapper">
        <h3 className={textAnimation}>Solana</h3>
        {solPrice && <p className="main--price">- ${solPrice}</p>}
      </div>
    </main>
  );
}
