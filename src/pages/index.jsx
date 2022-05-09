import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
      />
      <Navbar
        toggle={toggle}
      />
    </>
  );
};

export default Home;
