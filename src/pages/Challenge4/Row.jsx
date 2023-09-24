import React from "react";

const Row = ({ children, speed, playing }) => {
  const scrollerRef = React.useRef();
  const clonedScrollerRef = React.useRef();
  const hoverRef = React.useRef(false);
  const playingRef = React.useRef(playing);

  React.useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  const clonedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });

  React.useEffect(() => {
    const pixelsPerFrame = speed / 60;
    let animating = true;
    let scrollerXPos = 0;
    let clonedScrollerXPos = 0;
    function animate() {
      if (playingRef.current) {
        if (hoverRef.current) {
          scrollerXPos -= pixelsPerFrame / 2;
          clonedScrollerXPos -= pixelsPerFrame / 2;
        } else {
          scrollerXPos -= pixelsPerFrame;
          clonedScrollerXPos -= pixelsPerFrame;
        }

        // Reset the position of the scroller when it goes out of view
        // When xpos has scrolled the main container more than its own width
        // 0 => -width_of_container => 0
        if (scrollerXPos <= -scrollerRef.current.offsetWidth) {
          scrollerXPos = scrollerRef.current.offsetWidth;
        }

        if (clonedScrollerXPos <= -clonedScrollerRef.current.offsetWidth * 2) {
          clonedScrollerXPos = 0;
        }

        scrollerRef.current.style.transform = `translateX(${scrollerXPos}px)`;
        clonedScrollerRef.current.style.transform = `translateX(${clonedScrollerXPos}px)`;
      }

      if (animating) {
        window.requestAnimationFrame(animate);
      }
    }
    window.requestAnimationFrame(animate);

    return () => (animating = false);
  }, []);

  return (
    <div
      className="row"
      onMouseOver={() => (hoverRef.current = true)}
      onMouseOut={() => (hoverRef.current = false)}
    >
      <div ref={scrollerRef}>{children}</div>
      <div ref={clonedScrollerRef}>{clonedChildren}</div>
    </div>
  );
};

export default Row;
