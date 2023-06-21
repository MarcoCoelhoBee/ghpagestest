import { useEffect, useState } from "react";

interface ScrollProps {
  scrollRef: React.MutableRefObject<HTMLInputElement>;
}

const ScrollPreviousMovies = ({ scrollRef }: ScrollProps) => {
  const [scrollLeftVisible, setScrollLeftVisible] = useState<boolean>(false);
  const [scrollRightVisible, setScrollRightVisible] = useState<boolean>(true);
  const [isScrollHovered, setIsScrollHovered] = useState({
    left: false,
    right: false,
  });

  const setScrollHovered = (direction: string, value: boolean) => {
    setIsScrollHovered((prevState) => ({
      ...prevState,
      [direction]: value,
    }));
  };

  const ICONS_CHEVRONS = {
    left: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-left"
        viewBox="0 0 16 16"
        style={
          scrollLeftVisible && isScrollHovered.left
            ? { transform: "scale(1.3)" }
            : {}
        }
      >
        <path
          fillRule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
    right: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-right"
        viewBox="0 0 16 16"
        style={
          scrollRightVisible && isScrollHovered.right
            ? { transform: "scale(1.3)" }
            : {}
        }
      >
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollRef.current;

      if (scrollContainer) {
        const isScrollLeftVisible = scrollContainer.scrollLeft > 0;
        const isScrollRightVisible =
          scrollContainer.scrollLeft + scrollContainer.clientWidth <
          scrollContainer.scrollWidth - 1;

        setScrollLeftVisible(isScrollLeftVisible);
        setScrollRightVisible(isScrollRightVisible);

        // Reset the hovered state for the chevrons if they are not visible
        setIsScrollHovered((prevState) => ({
          ...prevState,
          left: isScrollLeftVisible ? prevState.left : false,
          right: isScrollRightVisible ? prevState.right : false,
        }));
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollRef, setIsScrollHovered]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`m-3 d-flex ${
        scrollLeftVisible ? `justify-content-between` : `justify-content-end`
      }`}
    >
      {scrollLeftVisible && (
        <div
          className="scroll-indicator"
          onClick={scrollLeft}
          onMouseEnter={() => setScrollHovered("left", true)}
          onMouseLeave={() => setScrollHovered("left", false)}
        >
          {ICONS_CHEVRONS.left}
        </div>
      )}
      {scrollRightVisible && (
        <div
          className="scroll-indicator"
          onClick={scrollRight}
          onMouseEnter={() => setScrollHovered("right", true)}
          onMouseLeave={() => setScrollHovered("right", false)}
        >
          {ICONS_CHEVRONS.right}
        </div>
      )}
    </div>
  );
};

export default ScrollPreviousMovies;
