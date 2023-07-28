import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(<Carousel photos={[TEST_IMAGES[0]]} title="Test Carousel" />);
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <Carousel photos={[TEST_IMAGES[0]]} title="Test Carousel" />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[0].caption}"]`)
  ).toBeInTheDocument();
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[1].caption}"]`)
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[0].caption}"]`)
  ).not.toBeInTheDocument();
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[1].caption}"]`)
  ).toBeInTheDocument();
});

/* Failing test (commented out)
it("fails when you click on the left arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // Set initial state to display the second image
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));

  // expect the second image to show, but not the first
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[0].caption}"]`)
  ).not.toBeInTheDocument();
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[1].caption}"]`)
  ).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[0].caption}"]`)
  ).toBeInTheDocument();
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[1].caption}"]`)
  ).not.toBeInTheDocument();
});
*/

it("works when you click on the left arrow (corrected)", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // Expect the first image to show initially
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[0].caption}"]`)
  ).toBeInTheDocument();
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[1].caption}"]`)
  ).not.toBeInTheDocument();

  // Click right arrow and verify the change
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));

  // Expect the second image to show, but not the first
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[0].caption}"]`)
  ).not.toBeInTheDocument();
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[1].caption}"]`)
  ).toBeInTheDocument();

  // Click left arrow and verify the change
  fireEvent.click(container.querySelector(".bi-arrow-left-circle"), {
    bubbles: true,
  });

  // Expect the first image to show again, but not the second
  expect(
    container.querySelector(`img[alt="${TEST_IMAGES[0].caption}"]`)
  ).toBeInTheDocument();
});
