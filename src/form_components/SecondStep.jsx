import React from "react";

const SecondStep = () => {
  const [models, setModels] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      fetch("https://gorest.co.in/public/v2/users")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setModels(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);


  return (
    <div>
      <div className="ModelBox p-3">
        {models.map((model) => {
          return (
            <div key={model.id} className="list-items my-2">
              <label
                htmlFor={model.id}
                className="series-list-item d-flex justify-content-between px-3"
              >
                <span>
                  <input
                    type="checkbox"
                    id={model.id}
                  />
                </span>
                <span>{model.name}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondStep;
