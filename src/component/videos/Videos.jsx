const imgd = '/images/ings1.png'
function Videos (){
    return(
        <>
        <div class="bg-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-gray-900">
        Our Success Story
      </h2>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
    </div>
    
    <div class="mt-10 flex justify-center">
      <div class="relative w-full max-w-4xl">
        
        <img class="w-full rounded-lg shadow-lg" src={imgd} alt="Success Story Image"/>
        
        
        <button class="absolute inset-0 flex items-center justify-center">
          <svg class="h-16 w-16 text-white bg-gray-900 bg-opacity-60 rounded-full p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 8.64v6.72c0 .68.73 1.1 1.34.74l5.13-3.36a.85.85 0 000-1.48L11.34 7.9a.85.85 0 00-1.34.74z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Videos;