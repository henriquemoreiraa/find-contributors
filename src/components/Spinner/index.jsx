import './index.css';

function Spinner() {
  return (
    <div data-testid="spinner" className="w-full flex flex-col items-center">
      <div className="lds-dual-ring" />
    </div>
  );
}

export default Spinner;
