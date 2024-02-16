
const FirstStep = () => {

  return (
    <section className="container">
      <div className="ModelBox p-3">
        <div className="list-items my-2">
          <label
            htmlFor="series"
            className="series-list-item d-flex justify-content-between px-3"
          >
            <span>
              <input type="checkbox" name="series[]" id="series" />
            </span>
            <span>T Series</span>
          </label>
        </div>
        <div className="list-items my-2">
          <label
            htmlFor="series1"
            className="series-list-item d-flex justify-content-between px-3"
          >
            <span>
              <input type="checkbox" name="series[]" id="series1" />
            </span>
            <span>T Series</span>
          </label>
        </div>
        <div className="list-items my-2">
          <label
            htmlFor="series2"
            className="series-list-item d-flex justify-content-between px-3"
          >
            <span>
              <input type="checkbox" name="series[]" id="series2" />
            </span>
            <span>T Series</span>
          </label>
        </div>
        <div className="list-items my-2">
          <label
            htmlFor="series3"
            className="series-list-item d-flex justify-content-between px-3"
          >
            <span>
              <input type="checkbox" name="series[]" id="series3" />
            </span>
            <span>T Series</span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default FirstStep;
