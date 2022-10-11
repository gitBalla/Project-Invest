import { render, fireEvent, screen } from "@testing-library/react";
import AppBar from './addButton';
import ProfileButton from './profileButton';
import AddButton from './addButton';
import App from '../../App';
import React from 'react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <AppBar /><ProfileButton /><AddButton />, ${div}
    </App>
    );
});

it('shows the login option when profile menu is clicked', () => {
  //render the appbar while logged out
  render(
    <App>
      <AppBar /><ProfileButton /><AddButton />
    </App>
  );

  //get elements to test
  const menu = screen.getByRole("profileMenu");

  //interact with those elements
  fireEvent.click(menu);
  const menuText = screen.getByRole("loginMenuItem")

  //assert the expected result
  expect(menuText).toHaveTextContent("Login");
})

it('shows the signup option when profile menu is clicked', () => {
  //render the appbar while logged out
  render(
    <App>
      <AppBar /><ProfileButton /><AddButton />
    </App>
  );

  //get elements to test
  const menu = screen.getByRole("profileMenu");
  
  //interact with those elements
  fireEvent.click(menu);
  const menuText = screen.getByRole("signupMenuItem")

  //assert the expected result
  expect(menuText).toHaveTextContent("Signup");
})

it('shows the dashboard option when profile menu is clicked and logged out', () => {
  //render the appbar while logged out
  render(
    <App>
      <AppBar /><ProfileButton /><AddButton />
    </App>
  );

  //get elements to test
  const menu = screen.getByRole("profileMenu");

  //interact with those elements
  fireEvent.click(menu);
  const menuText = screen.getByRole("dashboardMenuItem")

  //assert the expected result
  expect(menuText).toHaveTextContent("Dashboard");
})

xit('shows the dashboard option when profile menu is clicked and logged in', () => {
  //render the appbar while logged in
  render(
    <App>
      <AppBar /><ProfileButton /><AddButton />
    </App>
  );
  //get elements to test
  const menu = screen.getByRole("profileMenu");

  //interact with those elements
  fireEvent.click(menu);
  const menuText = screen.getByRole("dashboardMenuItem")

  //assert the expected result
  expect(menuText).toHaveTextContent("Dashboard");
})

xit('shows the profile option when profile menu is clicked and logged in', () => {
  //render the appbar while logged in
  render(
    <App>
      <AppBar /><ProfileButton /><AddButton />
    </App>
  );
  //get elements to test
  const menu = screen.getByRole("profileMenu");

  //interact with those elements
  fireEvent.click(menu);
  const menuText = screen.getByRole("profileMenuItem")

  //assert the expected result
  expect(menuText).toHaveTextContent("My Profile");
})

xit('shows the settings option when profile menu is clicked and logged in', () => {
  //render the appbar while logged in
  render(
    <App>
      <AppBar /><ProfileButton /><AddButton />
    </App>
  );
  //get elements to test
  const menu = screen.getByRole("profileMenu");

  //interact with those elements
  fireEvent.click(menu);
  const menuText = screen.getByRole("settingsMenuItem")

  //assert the expected result
  expect(menuText).toHaveTextContent("Settings");
})

xit('shows the logout option when profile menu is clicked and logged in', () => {
  //render the appbar while logged in
  render(
    <App>
      <AppBar /><ProfileButton /><AddButton />
    </App>
  );
  //get elements to test
  const menu = screen.getByRole("profileMenu");

  //interact with those elements
  fireEvent.click(menu);
  const menuText = screen.getByRole("logoutMenuItem")

  //assert the expected result
  expect(menuText).toHaveTextContent("Logout");
})