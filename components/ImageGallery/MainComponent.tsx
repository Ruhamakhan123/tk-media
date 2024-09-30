import React from "react";
import ImageComponent from "./ImageComponent";

const MainComponent: React.FC = () => {
  return (
    <main className="container mx-auto px-4">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a050a0e3c27ed6cd6efc858854b2e32bfc6510fd49a3f6b9dd21ca88ac7403b?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785"
          alt="Gallery image 1"
        />
        <ImageComponent src="http://b.io/ext_3-" alt="Gallery image 2" />
        <ImageComponent src="http://b.io/ext_4-" alt="Gallery image 3" />
        <ImageComponent src="http://b.io/ext_5-" alt="Gallery image 4" />
      </section>
    </main>
  );
};

export default MainComponent;
