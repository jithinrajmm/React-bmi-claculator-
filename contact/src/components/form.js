export default function Form() {
  return (
    <div className="shadow rounded shadow p-3 m-5 bg-dark rounded col-md-4">
      <form>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeHolder="Enter Name"
            required
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Phone number"
            required
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeHolder="Enter email"
            required
          />
        </div>
        <div className="row justify-content-center">
          <button type="submit" className="btn btn-danger m-2 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
