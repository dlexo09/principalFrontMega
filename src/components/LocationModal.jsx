import React, { forwardRef } from "react";

const LocationModal = forwardRef(({ locations, currentLocation, handleLocationChange }, ref) => (
  <div
    className="modal fade"
    id="locationModal"
    tabIndex="-1"
    aria-labelledby="locationModalLabel"
    aria-hidden="true"
    ref={ref}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="locationModalLabel">
            Seleccionar Sucursal
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <select
            className="form-select"
            onChange={handleLocationChange}
            value={currentLocation?.sucursalName || "Seleccionar sucursal"}
          >
            <option value="1" disabled>
              Seleccionar Sucursal
            </option>
            {locations.map((location) => (
              <option
                key={location.idSucursal}
                value={location.sucursalName}
              >
                {location.sucursalName}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  </div>
));

export default LocationModal;