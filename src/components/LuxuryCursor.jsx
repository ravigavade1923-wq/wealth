// import React, { useEffect, useRef } from "react";
// import "./LuxuryCursor.css";

// const LuxuryCursor = () => {
//   const cursorRef = useRef(null);
//   const followerRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const follower = followerRef.current;

//     let mouseX = window.innerWidth / 2;
//     let mouseY = window.innerHeight / 2;
//     let followerX = mouseX;
//     let followerY = mouseY;

//     const moveCursor = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;

//       if (cursor) {
//         cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//       }
//     };

//     const animateFollower = () => {
//       followerX += (mouseX - followerX) * 0.12;
//       followerY += (mouseY - followerY) * 0.12;

//       if (follower) {
//         follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
//       }

//       requestAnimationFrame(animateFollower);
//     };

//     const addHoverEffect = () => {
//       if (cursor) cursor.classList.add("cursor-active");
//       if (follower) follower.classList.add("cursor-active");
//     };

//     const removeHoverEffect = () => {
//       if (cursor) cursor.classList.remove("cursor-active");
//       if (follower) follower.classList.remove("cursor-active");
//     };

//     const clickableElements = document.querySelectorAll(
//       'a, button, input, textarea, select, .cursor-hover, [role="button"]'
//     );

//     clickableElements.forEach((el) => {
//       el.addEventListener("mouseenter", addHoverEffect);
//       el.addEventListener("mouseleave", removeHoverEffect);
//     });

//     document.addEventListener("mousemove", moveCursor);
//     animateFollower();

//     return () => {
//       document.removeEventListener("mousemove", moveCursor);

//       clickableElements.forEach((el) => {
//         el.removeEventListener("mouseenter", addHoverEffect);
//         el.removeEventListener("mouseleave", removeHoverEffect);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div ref={followerRef} className="luxury-cursor-follower"></div>
//       <div ref={cursorRef} className="luxury-cursor-dot">
//         <span className="luxury-cursor-core"></span>
//       </div>
//     </>
//   );
// };

// export default LuxuryCursor;