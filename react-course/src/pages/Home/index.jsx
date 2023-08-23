

function Home() {

  return (
    <>
      <div className='bg-red-100'></div>

      <div className="w-[1920px] xsm:w-full mx-auto">
        <nav className="bg-gray-800 flex justify-between lg:justify-start items-center">
          <div className="logo flex-initial p-2 w-1/6">
            <img src="img/logo.png" width={100} alt="" />
          </div>
          <div className="links lg:block hidden w-1/6 md:w-4/6">
            <ul className="flex menu items-center justify-center gap-5">
              <li><a href="#" className="link">Home</a></li>
              <li><a href="#" className="link">Play Together</a></li>
              <li><a href="#" className="link">Explore</a></li>
              <li><a href="#" className="border-4 border-yellow-400 text-white font-bold p-2 rounded-full align-middle transition duration-500 hover:bg-white hover:text-black">Browser Fury</a></li>
              <li><a href="#" className="rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-500">Buy Now</a></li>
            </ul>
          </div>
          <div className="block lg:hidden w-1/6 lg:w-4/6">
            <a href="#" className="link" id="mobile-menu">Menu</a>
            <ul className="mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800">
              <li><a href="#" className="link">Home</a></li>
              <li><a href="#" className="link">Play Together</a></li>
              <li><a href="#" className="link">Explore</a></li>
              <li><a href="#" className="my-4 inline-block border-4 border-yellow-400 text-white font-bold p-2 rounded-full align-middle transition duration-500 hover:bg-white hover:text-black">Browser Fury</a></li>
              <li><a href="#" className="my-4 inline-block rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-500">Buy Now</a></li>
            </ul>
          </div>
        </nav>
        <div className="header">
          <img src="img/hero.jpg" alt="" />
        </div>
        <section>
          <div className="bg-wave-pattern h-6 bg-repeat-x relative -top-2" />
          <div className="bg-wave-pattern-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center">
            <a href="#" className="inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200">Buy Now</a>
            <a href="#" className="inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200">Watch the Trailer</a>
          </div>
          <div className="bg-wave-pattern bg-repeat-x h-6 relative top-2" />
        </section>
        {/* SECCIÓN DE CARDS */}
        <section className="bg-pattern-characters-red py-28">
          <div className="lg:container 2xl:w-3/5 mx-auto md:flex gap-5 md:w-full p-3 ">
            <div className="left bg-character-mario bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 mx-auto">
              {/*CARD */}
              <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5">
                <div className="cover bg-black">
                  <video src="videos/video01.mp4" autoPlay loop muted />
                </div>
                <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
                  <h3 className="font-black text-4xl py-10">Play together</h3>
                  <p className="text-xl">Work with (or against) your friends and family*.</p>
                  <a href="#" className="button-box">
                    Watch the Trailer
                    <span className="button" />
                  </a>
                </div>
                <div className="dots flex justify-between p-4">
                  <div className="dot h-3 w-3 bg-blue-600 rounded-full" />
                  <div className="dot h-3 w-3 bg-blue-600 rounded-full" />
                </div>
              </div>
            </div>
            <div className="right w-5/6 md:w-1/2 text-center mx-auto">
              <h2 className="font-black text-white text-6xl py-8">Available Now</h2>
              <p className="font-bold text-white text-2xl mx-auto py-10 w-4/5">One of the best Mario games ever...</p>
              <p className="font-black text-white text-4xl mx-auto py-10 w-4/5">Team up for a paws-itively adorable adventure!</p>
              <p className="text-white text-center w-4/5 mx-auto">
                Bowser is up to his old tricks again and only Mario and his friends can save the day! Use power-ups like the Super Bell, which grants catlike abilities like climbing and scratching, to overcome Bowser and his minions.
              </p>
              {/*CARD */}
              <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5">
                <div className="cover bg-black">
                  <video src="videos/video02.mp4" autoPlay loop muted />
                </div>
                <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
                  <h3 className="font-black text-4xl py-8">Explore</h3>
                  <p className="text-xl">Prowl through some popular places.</p>
                  <a href="#" className="button-box">
                    Take a look! 
                    <span className="button" />
                  </a>
                </div>
                <div className="dots flex justify-between p-4">
                  <div className="dot h-3 w-3 bg-blue-600 rounded-full" />
                  <div className="dot h-3 w-3 bg-blue-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer text-center flex justify-center gap-9 pt-10">
            <img src="img/coin.gif" alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]" />
            <img src="img/coin.gif" alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]" />
            <img src="img/coin.gif" alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]" />
            <img src="img/coin.gif" alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block" />
            <img src="img/coin.gif" alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block" />
            <img src="img/coin.gif" alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block" />
          </div>
        </section>
        <section className="bg-yellow-dots">
          <div className="bg-wave-pink bg-repeat-x h-6 relative -top-4" />
          <div className="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6">
            <div className="left xl:w-1/3 lg:w-1/2 p-5">
              <h3 className="text-yellow-900 font-black  xsm:text-3xl sm:text-4xl">
                Cat <br /> Transformation<br /> Center
              </h3>
              <p className="py-4 text-xl">
                We’re not kitten—transform into a cat-tastic new you!
              </p>
              <p>
                <a href="#" className="button-box  transition duration-200 group">
                  Meow! 
                  <span className="button" />
                </a>
              </p>
            </div>
            <div className="right xl:w-1/3 lg:w-1/2">
              <img src="img/activity_img3.png" className="md:w-full" alt="" />
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div className="bg-wave-pattern bg-repeat-x h-6 relative -top-4" />
          <div className="container mx-auto text-center py-10 w-2/3">
            <div className="pb-5">
              <a href="#" className="button-box">
                Customer Support 
                <span className="button" />
              </a>
            </div>
            <div className="text-white">
              <p className="py-2">*Additional games, systems and/or accessories may be required for multiplayer mode</p> 
              <p className="py-2">** Nintendo Switch Online membership (sold separately) and Nintendo Account required for online features. Not available in all countries. Internet access required for online features. A Nintendo Account is required to receive and redeem My Nintendo points. Terms apply. nintendo.com/switch-online. </p>
              <p className="py-2">Game, systems, some accessories and amiibo sold separately. Visit amiibo.com for details on amiibo functionality. </p>
              <p className="py-2">Nintendo Switch Lite plays all games that support handheld mode.</p>
              <p className="py-2">©2013-2021 Nintendo. Super Mario and Nintendo Switch are trademarks of Nintendo.</p>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Home
