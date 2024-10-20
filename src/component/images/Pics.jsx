<link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
const img1 = '/images/saps1.png'
const img2 = '/images/snap2.png'
function Pics(){
    return (
      <>
         <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
          <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <img class="w-full dark:hidden rounded-xl" src={img1} alt="" />
                <img class="w-full hidden dark:block rounded-xl" src={img1} alt="" />
              </div>


              <div class="mt-6 sm:mt-8 lg:mt-3">
              <h3 className="font-medium">About Us ______</h3>
                <h1
                  class="text-xl font-bold text-gray-900 sm:text-6xl dark:text-white"
                >
                  We Are Maximize<br /> Your Learning <br /> Growth
                </h1>

                <p class="mb-6 text-gray-500 dark:text-gray-400">
                <p className="mt-10">Aliqua id fugiat nostrud irure ex duis ea quis id
                   quis ad et. <br /> Sunt qui esse pariatur duis deserunt mollit dolore
                    cillum <br /> minim tempor enim. Elit aute irure tempo.</p>
                </p>

                <div class="grid grid-cols-2 gap-8 text-center mt-10">
                <div class="flex items-center space-x-2">
                  <span class="inline-block w-6 h-6 rounded-full bg-gray-200 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Training Services</span>
                </div>
                
                <div class="flex items-center space-x-2">
                  <span class="inline-block w-6 h-6 rounded-full bg-gray-200 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Expert Trainer</span>
                </div>

                <div class="flex items-center space-x-2">
                  <span class="inline-block w-6 h-6 rounded-full bg-gray-200 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Big Experience</span>
                </div>

                <div class="flex items-center space-x-2">
                  <span class="inline-block w-6 h-6 rounded-full bg-gray-200 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Lifetime Access</span>
                </div>
              </div>

              <button class="bg-blue-950 text-white font-bold py-2 px-4 rounded-full
                hover:bg-blue-950 
                md:px-6 md:py-3 
                lg:px-8 lg:py-4 mt-16
                transition duration-300">
                Explore More +
              </button>

              </div>
            </div>
          </div>
        </section>
      </>
    )
}
export default Pics;