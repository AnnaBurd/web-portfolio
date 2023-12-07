"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const GlobalError: React.FC<Props> = ({ error, reset }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="bg-black text-5xl text-white" role="alert">
            GLOBAL ERROR: {error.message}
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
