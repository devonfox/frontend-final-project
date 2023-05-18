import { useState } from "react";

const TestPolygonEndpoint = () => {
  const [data, setData] = useState<any>(null);
  const [symbol, setSymbol] = useState("");
  const [notFound, setNotFound] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/polygonDetail?symbol=${symbol}`);

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error, "okay");
    }
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
          onClick={fetchData}
        >
          Submit
        </button>
      </div>

      {data && !notFound ? (
        <>
          <div className="my-4 mx-4">
            <b className="fs-5">{data.results.name}</b>
          </div>
          <div className="my-4 mx-4">
            <i className="fs-5 fs-6">{data.results.description}</i>
          </div>
          <pre className={"mx-4 my-5"}>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default TestPolygonEndpoint;
