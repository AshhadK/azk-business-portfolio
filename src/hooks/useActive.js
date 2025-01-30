import { useAppContext } from "../context/ContextProvider";
import { useEffect, useRef } from "react";
import useScroll from "./useScroll";

const useActive = (id) => {
  const ref = useRef();
  const { setCurrentActive } = useAppContext(); // Accessing setCurrentActive from context
  const { scroll } = useScroll(); // Assuming useScroll returns scroll position

  useEffect(() => {
    if (ref.current) {
      // Check if the element is within a threshold of the scroll position
      if (ref.current.offsetTop <= scroll + 100 && ref.current.offsetTop + ref.current.offsetHeight > scroll + 100) {
        setCurrentActive(id); // Set the active state in context
      }
    }
  }, [scroll, setCurrentActive, id]);

  return ref; // Returning the ref to attach to your target element
};

export default useActive;
