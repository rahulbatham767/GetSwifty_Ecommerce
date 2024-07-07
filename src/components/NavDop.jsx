import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

function NavDrop(isAuthenticated, user, loginWithRedirect, logout) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <ul
          className="align-items-center"
          style={{ display: "flex", flexDirection: "row !important" }}
        >
          {isAuthenticated && (
            <div
              style={{
                display: "flex",
                flexDirection: "row !important",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={user.picture}
                  alt={user.name}
                  className="rounded-circle"
                  width="auto"
                  height="30"
                />
              </div>
              <div
                className="d-flex flex-column"
                style={{ marginRight: "5px", marginLeft: "7px" }}
              >
                <p>{user.name}</p>
                {/* <p>{user.email}</p> */}
              </div>
            </div>
          )}
          {!isAuthenticated && (
            <NavLink to="/login">
              <Button
                id="qsLoginBtn"
                color="primary"
                className="btn-margin"
                onClick={() => loginWithRedirect()}
              >
                Log in
              </Button>
            </NavLink>
          )}
          {isAuthenticated && (
            <NavLink>
              <Button
                id="qsLoginBtn"
                color="primary"
                className="btn-margin"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
            </NavLink>
          )}
        </ul>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">MyProfile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Orders</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Wishlist</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavDrop;
