
export default function ErrorHandling ({error}) {
    return (
      <div className="error-block">
        <h2>Error!</h2>
        <p>{error.status} {error.data.message}</p>
      </div>
    );
  };