import { useEffect } from "react";
import { Section } from "./Components/Section";
import { Navbar } from "./Components/Navbar";

function App() {

    useEffect(() => {
      const $navbar = document.querySelector('#navbar')

      const observerOpticions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.90
    }
      
      const observer = new IntersectionObserver(enteries => {
        enteries.forEach(entry => {
            const { isIntersecting } = entry
            if (isIntersecting) {
                const color = entry.target.getAttribute('data-header-color')
               $navbar.style.color = color
                //console.log('color',color)
            }
            
        })
    }, observerOpticions)
    const $sections = document.querySelectorAll('.section');
    $sections.forEach((section) => observer.observe(section));
    },[])

  
  return (
    <>
      <Navbar />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center">
          <Section
            color={"white"}
            title={
              <h2 className="text-white pt-[60px] text-[40px] font-medium">
                Experiencie Tesla
              </h2>
            }
            info={
              <p className="text-white text-sm pt-2">
                Schedule a Demo Drive Today
              </p>
            }
            background={
              <video autoPlay muted loop src="/Tesla-home-video.webm"></video>
            }
            footer={
              <div>
                <a
                  className="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white px-20 py-2 inline-block hover:bg-white hover:text-black transition-colors"
                  href="#"
                >
                  Demo Drive
                </a>
              </div>
            }
          />
        </div>

        <div className="snap-center">
          <Section
            color={"black"}
            title={
              <h2 className="text-black pt-[60px] text-[40px] font-medium">
                Model 3
              </h2>
            }
            info={
              <>
                <p className="text-black text-sm pt-2">Starting at $32,740</p>
                <p className="text-black text-sm">After Federal Tax Credit</p>
              </>
            }
            background={
              <img
                className="object-cover object-center h-full w-screen"
                src="/model3.avif"
                alt="Model 3"
              />
            }
            footer={
              <div slot="footer" className="gap-x-6 flex mx-auto">
                <a
                  className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black"
                  href="#"
                >
                  Explore Inventory
                </a>
                <a
                  className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
                  href="#"
                >
                  Custom Order
                </a>
              </div>
            }
          />
        </div>

        <div className="snap-center">
          <Section
            color={"black"}
            title={
              <h2 className="text-black pt-[60px] text-[40px] font-medium">
                Model Y
              </h2>
            }
            info={
              <>
                <p className="text-black text-sm pt-2">Starting at $40,240</p>
                <p className="text-black text-sm">After Federal Tax Credit</p>
              </>
            }
            background={
              <img
                className="object-cover object-center h-full w-screen"
                src="/modely.avif"
                alt="Model 3"
              />
            }
            footer={
              <div slot="footer" className="gap-x-6 flex mx-auto">
                <a
                  className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black"
                  href="#"
                >
                  Explore Inventory
                </a>
                <a
                  className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
                  href="#"
                >
                  Custom Order
                </a>
              </div>
            }
          />
        </div>

        <div className="snap-center">
          <Section
            color={"black"}
            title={
              <h2 className="text-black pt-[60px] text-[40px] font-medium">
                Model S
              </h2>
            }
            info={
              <a
                className="text-black text-sm pt-2 underline decoration-1 underline-offset-4"
                href="#"
              >
                Explore Inventory
              </a>
            }
            background={
              <img
                className="object-cover object-center h-full w-screen"
                src="/models.avif"
                alt="Model S"
              />
            }
            footer={
              <div slot="footer" className="gap-x-6 flex mx-auto">
                <a
                  className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black"
                  href="#"
                >
                  Custom Order
                </a>
                <a
                  className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
                  href="#"
                >
                  Demo Drive
                </a>
              </div>
            }
          />
        </div>

        <div className="snap-center">
          <Section
            color={"black"}
            title={
              <h2 className="text-black pt-[60px] text-[40px] font-medium">
                Model X
              </h2>
            }
            info={
              <a
                className="text-black text-sm pt-2 underline decoration-1 underline-offset-4"
                href="#"
              >
                Explore Inventory
              </a>
            }
            background={
              <img
                className="object-cover object-center h-full w-screen"
                src="/modelx.avif"
                alt="Model X"
              />
            }
            footer={
              <div slot="footer" className="gap-x-6 flex mx-auto">
                <a
                  className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black"
                  href="#"
                >
                  Custom Order
                </a>
                <a
                  className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
                  href="#"
                >
                  Demo Drive
                </a>
              </div>
            }
          />
        </div>

        <div className="snap-center">
          <Section
            color={"black"}
            title={
              <h2 className="text-black pt-[60px] text-[40px] font-medium">
                Solar Panels
              </h2>
            }
            info={
              <a
                className="text-black text-sm pt-2 underline decoration-1 underline-offset-4"
                href="#"
              >
                Schedule a Virtual Consultation
              </a>
            }
            background={
              <img
                className="object-cover object-center h-full w-screen"
                src="/solarpanels.avif"
                alt="Model 3"
              />
            }
            footer={
              <div slot="footer" className="gap-x-6 flex mx-auto">
                <a
                  className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black"
                  href="#"
                >
                  Order Now
                </a>
                <a
                  className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            }
          />
        </div>

        <div className="snap-center">
          <Section
            color={"black"}
            title={
              <h2 className="text-Black pt-[60px] text-[40px] font-medium">
                Solar Roof
              </h2>
            }
            info={
              <p className="text-black text-sm pt-2">
                Produce Clean Energy From Your Roof
              </p>
            }
            background={
              <img
                className="object-cover object-center h-full w-screen"
                src="/solarroof.avif"
                alt="Model 3"
              />
            }
            footer={
              <div slot="footer" className="gap-x-6 flex mx-auto">
                <a
                  className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black"
                  href="#"
                >
                  Order Now
                </a>
                <a
                  className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            }
          />
        </div>

        <div className="snap-center">
          <Section
            color={"black"}
            title={
              <h2 className="text-black pt-[60px] text-[40px] font-medium">
                Powerwall
              </h2>
            }
            background={
              <img
                className="object-cover object-center h-full w-screen"
                src="/powerwall.avif"
                alt="Model 3"
              />
            }
            footer={
              <div slot="footer" className="gap-x-6 flex mx-auto">
                <a
                  className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black"
                  href="#"
                >
                  Order Now
                </a>
                <a
                  className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            }
          />
        </div>
      </main>
    </>
  );
}

export default App;
