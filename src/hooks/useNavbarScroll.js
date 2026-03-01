import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 50;

/**
 * useNavbarScroll - Returns whether the user has scrolled past the threshold.
 * Use for navbar styling: transparent/wide at top → rounded/centered/blurred after scroll.
 */
export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}

export default useNavbarScroll;
