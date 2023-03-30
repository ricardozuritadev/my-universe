import { useState } from 'react';

const WelcomePage = () => {
  const [welcomePageVisibility, setWelcomePageVisibility] = useState({
    opacity: 1,
    display: 'block',
  });

  return (
    <div
      className="p-welcome-page"
      style={{
        opacity: welcomePageVisibility.opacity,
        display: welcomePageVisibility.display,
      }}
    >
      <p className="p-welcome-page__text p-welcome-page__text--welcome">
        bienvenido/a a
      </p>
      <h2 className="p-welcome-page__text p-welcome-page__text--universe">
        mi universo
      </h2>
      <button
        className="p-welcome-page__button"
        onClick={() => {
          setWelcomePageVisibility({
            opacity: 0,
          });
          setTimeout(() => setWelcomePageVisibility({ display: 'none' }), 1000);
        }}
      >
        explorar
      </button>
    </div>
  );
};

export default WelcomePage;
