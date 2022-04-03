import React from "react";

export default function SimpleForm() {
    return (
        <form className="row g-3">
            <div className="col-sm-4 form-floating">
                <input type="number" id="principal" className="form-control" placeholder="Principal" min="0" step="1000" required/>
                <label for="principal">Principal:</label>
            </div>

            <div className="col-sm-4 form-floating">
                <input type="number" id="rate" className="form-control" placeholder="Rate"  min="1" step="1" required/>
                <label for="rate">Rate:</label>
            </div>

            <div className="col-sm-4 form-floating">
                <input type="number" id="years" className="form-control" placeholder="Years" min="1" step="1" required/>
                <label for="years">Years:</label>
            </div>

            <div className="btn-group">
                <button id="calculate-btn" className="btn btn-primary btn-space" type="submit">Calculate</button>
                <button id="reset-btn" className="btn btn-secondary btn-space" type="reset">Reset</button>
            </div>
        </form>
    );
}