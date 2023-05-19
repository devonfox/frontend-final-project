import { useState } from "react";

const TestPolygonEndpoint = () => {
  const [data, setData] = useState<any>(null);
  const [symbol, setSymbol] = useState("");
  const [notFound, setNotFound] = useState(false); // TODO: implement
  const [tickerData, setTickerData] = useState<any>(null);
  const [price, setPrice] = useState(0);

  const fetchData = () => {
    fetch(`/api/polygonDetail?symbol=${symbol}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  const fetchPrice = () => {
    fetch(`/api/polygonTicker?symbol=${symbol}`)
      .then((response) => response.json())
      .then((data) => {
        setTickerData(data);
        setPrice(data.results[0].vw.toFixed(2));
      })
      .catch((error) => console.error(error));
  };

  const handleClick = () => {
    fetchData();
    fetchPrice();
  };

  const convertDatetoString = (date: string) => {
    const timestamp = parseInt(date, 10);
    const newDate = new Date(timestamp);
    const formattedDate = newDate.toLocaleDateString();
    const formattedTime = newDate.toLocaleTimeString(); 
    return new String(formattedDate + " " + formattedTime);
  };

  return (
    <div className={"flex m-4"}>
      <div className={"fw-italic my-3 mx-4 display-6"}>Stock Search</div>
      <div className={"mt-3 mb-5"}>
        <input
          className={"mx-4 w-25 form-control my-3 col-6"}
          onChange={(e) => setSymbol(e.target.value)}
        ></input>
        <button
          type={"button"}
          className={"btn btn-outline-dark col-3 mx-4"}
          onClick={handleClick}
        >
          View
        </button>
      </div>

      {data ? (
        <>
          <div className="my-3 mx-4">
            <b className="fs-5">{data.results.name}</b>
          </div>
          <div className="my-3 mx-4">
            <div className={"fs-3 mb-3"}>${price}</div>
            <div className={"fst-italic fw-light"}>
              as of {convertDatetoString(tickerData.results[0].t)}
            </div>
          </div>
          <div className="my-4 mx-4">
            <div className="fst-italic">{data.results.description}</div>
          </div>
          <pre className={"mx-4 my-5"}>
            {JSON.stringify(tickerData, null, 2)}
          </pre>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default TestPolygonEndpoint;
