import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/nav/mainNav.vue";


describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("New Careers");
    expect(companyName).toBeInTheDocument();
  });
});
