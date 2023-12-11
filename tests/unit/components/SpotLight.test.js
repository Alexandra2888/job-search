import { render, screen } from "@testing-library/vue";
import axios from "axios";

import SpotLight from "@/components/spotLight/SpotLight.vue";

vi.mock("axios");

describe("SpotLight", () => {
  const mockSpotlightsResponse = (spotlight = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: "Some image",
          title: "Some title",
          description: "Some description",
          ...spotlight,
        },
      ],
    });
  };

  it("provides image to parent component", async () => {
    const spotlight = { img: "Other image" };
    mockSpotlightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.img }}</h1>
        </template>`,
      },
    });

    const text = await screen.findByText("Other image");
    expect(text).toBeInTheDocument();
  });

  it("provides title to parent component", async () => {
    const spotlight = { title: "Other title" };
    mockSpotlightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.title }}</h1>
        </template>`,
      },
    });

    const text = await screen.findByText("Other title");
    expect(text).toBeInTheDocument();
  });

  it("provides description to parent component", async () => {
    const spotlight = { description: "Another description" };
    mockSpotlightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.description }}</h1>
        </template>`,
      },
    });

    const text = await screen.findByText("Another description");
    expect(text).toBeInTheDocument();
  });
});
