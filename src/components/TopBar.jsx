import React, { useEffect, useState, useContext } from 'react';
import { LocationContext } from '../LocationContext';
import { serverAPIsFront } from '../config';
import '../components/TopBar.css';

const TopBar = ({ modalRef, locations, setLocations }) => {
  // ✅ Usar el contexto directamente
  const { currentLocation, setCurrentLocation } = useContext(LocationContext);

  // console.log("🏠 [TopBar] Component rendered with context:", {
  //   currentLocation,
  //   currentLocationName: currentLocation?.sucursalName,
  //   locations: locations.length,
  //   hasSetCurrentLocation: !!setCurrentLocation
  // });

  // ✅ Función para abrir el modal manualmente
  const openLocationModal = () => {
    // console.log("🏠 [TopBar] Opening location modal manually");
    
    // Usar Bootstrap modal JavaScript API
    const modalElement = document.getElementById('locationModal');
    if (modalElement) {
      // Crear instancia del modal Bootstrap si no existe
      let modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (!modalInstance) {
        modalInstance = new bootstrap.Modal(modalElement);
      }
      modalInstance.show();
    } else {
      console.warn("🏠 [TopBar] Modal element not found");
    }
  };

  useEffect(() => {
    const fetchLocations = async () => {
      if (locations.length === 0) {
        try {
          // console.log("🏠 [TopBar] Fetching locations from API...");
          const response = await fetch(`${serverAPIsFront}api/sucursales`);
          const data = await response.json();
          // console.log("🏠 [TopBar] Locations fetched:", data);
          // console.log("🏠 [TopBar] Total locations:", data.length);
          
          setLocations(data);

          // ✅ Verificar si hay una ubicación guardada
          const savedLocation = localStorage.getItem("selectedLocation");
          if (savedLocation) {
            try {
              const parsedLocation = JSON.parse(savedLocation);
              // console.log("🏠 [TopBar] Found saved location:", parsedLocation);
              setCurrentLocation(parsedLocation);
            } catch (error) {
              console.error("🏠 [TopBar] Error parsing saved location:", error);
              localStorage.removeItem("selectedLocation");
              
              // ✅ Si el localStorage está corrupto, abrir modal
              setTimeout(() => {
                // console.log("🏠 [TopBar] Corrupted localStorage, opening modal");
                openLocationModal();
              }, 1000);
            }
          } else if (data.length > 0 && !currentLocation) {
            // console.log("🏠 [TopBar] No saved location, checking geolocation...");
            
            // ✅ Intentar geolocalización con timeout
            if (navigator.geolocation) {
              const geoOptions = {
                timeout: 5000, // ✅ 5 segundos máximo
                maximumAge: 300000,
                enableHighAccuracy: false
              };

              navigator.geolocation.getCurrentPosition(
                (position) => {
                  // console.log("🏠 [TopBar] Geolocation successful:", position.coords);
                  const userLat = position.coords.latitude;
                  const userLng = position.coords.longitude;

                  let closestLocation = data[0];
                  let minDistance = getDistance(userLat, userLng, data[0].latitud, data[0].longitud);

                  data.forEach((location) => {
                    const distance = getDistance(userLat, userLng, location.latitud, location.longitud);
                    if (distance < minDistance) {
                      minDistance = distance;
                      closestLocation = location;
                    }
                  });

                  // console.log("🏠 [TopBar] Closest location found:", closestLocation);
                  setCurrentLocation(closestLocation);
                  
                  try {
                    localStorage.setItem("selectedLocation", JSON.stringify(closestLocation));
                  } catch (error) {
                    console.warn("🏠 [TopBar] Could not save to localStorage:", error);
                  }
                },
                (error) => {
                  console.warn("🏠 [TopBar] Geolocation failed or denied:", error.message, "Code:", error.code);
                  
                  // ✅ ABRIR MODAL en lugar de usar ubicación por defecto
                  // console.log("🏠 [TopBar] Geolocation failed, opening location selection modal");
                  
                  // Esperar un poco para que el DOM esté listo
                  setTimeout(() => {
                    openLocationModal();
                  }, 500);
                },
                geoOptions
              );
            } else {
              // ✅ Geolocalización no soportada, abrir modal
              // console.log("🏠 [TopBar] Geolocation not supported, opening modal");
              setTimeout(() => {
                openLocationModal();
              }, 500);
            }
          }
        } catch (error) {
          console.error("🏠 [TopBar] Error fetching locations:", error);
          
          // ✅ En caso de error de API, también abrir modal cuando esté disponible
          setTimeout(() => {
            if (locations.length > 0) {
              // console.log("🏠 [TopBar] API error but locations available, opening modal");
              openLocationModal();
            }
          }, 1000);
        }
      } else {
        // console.log("🏠 [TopBar] Locations already loaded:", locations.length);
        
        // ✅ Si ya hay ubicaciones pero no hay currentLocation, abrir modal
        if (!currentLocation && locations.length > 0) {
          // console.log("🏠 [TopBar] Locations loaded but no currentLocation, opening modal");
          setTimeout(() => {
            openLocationModal();
          }, 500);
        }
      }
    };

    fetchLocations();
  }, [locations.length, setLocations, currentLocation]);

  // ✅ useEffect separado para detectar cambios en currentLocation
  useEffect(() => {
    if (currentLocation) {
      // console.log("🏠 [TopBar] currentLocation changed:", currentLocation.sucursalName);
    } else {
      // console.log("🏠 [TopBar] currentLocation is null/undefined");
    }
  }, [currentLocation]);

  const getDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom top-bar-container fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-none d-md-block" href="#"></a>
        <div
          className="container top-bar d-flex justify-content-lg-between justify-content-center align-item-center"
          id="navbarNav"
        >
          <div className="top-bar-phone d-lg-flex d-none align-items-center">
            <a href="tel:+523396901234" className="d-flex align-item-center">
              <span></span>33 9690 1234
            </a>
          </div>

          <ul className="top-bar-ubicacion d-flex align-items-center">
            <p className="text-light d-md-block d-none">Cambiar ubicación:</p>
            <li className="nav-item">
              <button
                type="button"
                className="btn top-bar-location d-flex align-item-center"
                data-bs-toggle="modal"
                data-bs-target="#locationModal"
              >
                <span className="location-icon"></span>
                {/* ✅ Mostrar texto apropiado según el estado */}
                {(() => {
                  if (!currentLocation) {
                    return "Seleccionar Sucursal";
                  }
                  const locationName = currentLocation.sucursalName;
                  // console.log("🏠 [TopBar] Rendering location name:", locationName);
                  return locationName;
                })()}
                <span className="down-icon"></span>
              </button>
            </li>
          </ul>

          <div className="client-mega d-lg-flex d-none align-items-center">
            <a href="https://pagoenlinea.megacable.com.mx/" target="_blank" rel="noopener noreferrer">
              Paga en línea
            </a>
            <a href="https://sel.megacable.com.mx/" target="_blank" rel="noopener noreferrer">
              Mi cuenta MEGA
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;