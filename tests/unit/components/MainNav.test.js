import { render, screen } from '@testing-library/vue'
import userEvent from "@testing-library/user-event";


import MainNav from '@/components/nav/mainNav.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('New Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Bobo Corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  });
});

describe("when the user logs in", () => {
it("displays user profile picture", async () => {
  render(MainNav);
  let profileImage = screen.queryByRole("img", {
    name: /user profile image/i,
  });
  expect(profileImage).not.toBeInTheDocument();

  const loginButton = screen.getByRole("button", {
    name: /sign in/i,
  });
  await userEvent.click(loginButton);

  profileImage = screen.getByRole("img", {
    name: /user profile image/i,
  });
  expect(profileImage).toBeInTheDocument();
})
})


