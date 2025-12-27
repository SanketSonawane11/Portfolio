export const projects = [
  {
    category: "Web",
    title: "Flip Image – Image Converter",
    src: "/Projects/FlipImage.png",
    content: `
      <div class='p-4 md:p-6 lg:p-8'>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Overview:</strong> 
          A fast, privacy-focused image conversion tool with modern glass UI and CDN-backed delivery.
        </p>

        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Key Features:</strong>
        </p>
        <ul class='list-disc list-inside mb-4 space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Multiple image format conversions</li>
          <li class='text-base md:text-lg lg:text-xl'>Conversion history with searchable records</li>
          <li class='text-base md:text-lg lg:text-xl'>Bookmark popup for quick reuse</li>
          <li class='text-base md:text-lg lg:text-xl'>Minimal, glassmorphism-based UI</li>
        </ul>

        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Tech Stack:</strong>
        </p>
        <ul class='list-disc list-inside space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Next.js</li>
          <li class='text-base md:text-lg lg:text-xl'>Cloudflare Workers</li>
          <li class='text-base md:text-lg lg:text-xl'>CDN-based image delivery</li>
        </ul>
      </div>
    `,
    link: "https://flipimage.vercel.app/",
    github: "",
  },

  {
    category: "Web",
    title: "Admorph – AI Ad Personalisation Engine",
    src: "/Projects/Admorph.png",
    content: `
      <div class='p-4 md:p-6 lg:p-8'>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Overview:</strong> 
          AI-driven ad personalisation platform that dynamically adapts ad creatives based on real-time user behaviour.
        </p>

        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Key Contributions:</strong>
        </p>
        <ul class='list-disc list-inside mb-4 space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>
            Engineered a FastAPI backend with a trained Random Forest model for real-time personalisation
          </li>
          <li class='text-base md:text-lg lg:text-xl'>
            Implemented adaptive ad rendering, improving CTR from 2.5% to 9.7%
          </li>
          <li class='text-base md:text-lg lg:text-xl'>
            Periodic model retraining using Supabase-backed datasets
          </li>
        </ul>

        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Tech Stack:</strong>
        </p>
        <ul class='list-disc list-inside space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Python (FastAPI)</li>
          <li class='text-base md:text-lg lg:text-xl'>JavaScript</li>
          <li class='text-base md:text-lg lg:text-xl'>Machine Learning (Random Forest)</li>
          <li class='text-base md:text-lg lg:text-xl'>Supabase</li>
        </ul>
      </div>
    `,
    link: "",
    video: "https://tinyurl.com/admorph",
    github: "",
  },

  {
    category: "Web",
    title: "Payments App",
    src: "/Projects/Payments.jpg",
    content: `
      <div class='p-4 md:p-6 lg:p-8'>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Description:</strong> 
          A payments app where users can send and receive money from registered users. Includes a custom hook to prevent unauthorized access.
        </p>

        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Frontend:</strong>
        </p>
        <ul class='list-disc list-inside mb-4 space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Next.js</li>
          <li class='text-base md:text-lg lg:text-xl'>Recoil</li>
          <li class='text-base md:text-lg lg:text-xl'>Aceternity UI</li>
        </ul>

        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Backend:</strong>
        </p>
        <ul class='list-disc list-inside mb-4 space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Node.js & Express.js</li>
          <li class='text-base md:text-lg lg:text-xl'>ZOD (Input validation)</li>
          <li class='text-base md:text-lg lg:text-xl'>JWT Authentication</li>
          <li class='text-base md:text-lg lg:text-xl'>MongoDB</li>
          <li class='text-base md:text-lg lg:text-xl'>Transactional money transfers</li>
        </ul>
      </div>
    `,
    link: "",
    video:
      "https://drive.google.com/file/d/1XCQBN8ThuRc43PapPp_GTk-VgaBG_30l/view",
    github: "https://github.com/SanketSonawane11/PayTm",
  },

  {
    category: "Web",
    title: "Pilot-Searching",
    src: "/Projects/Pilot-mapping.png",
    content: `
      <div class='p-4 md:p-6 lg:p-8'>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          Mapping and discovery platform for drone pilots using real-time geolocation.
        </p>

        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Key Features:</strong>
        </p>
        <ul class='list-disc list-inside mb-4 space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Live map-based pilot discovery</li>
          <li class='text-base md:text-lg lg:text-xl'>Admin real-time location tracking</li>
          <li class='text-base md:text-lg lg:text-xl'>Proximity and experience-based filtering</li>
        </ul>

        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Tech Stack:</strong>
        </p>
        <ul class='list-disc list-inside space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Next.js</li>
          <li class='text-base md:text-lg lg:text-xl'>Mapbox API</li>
          <li class='text-base md:text-lg lg:text-xl'>Node.js, Express.js, MongoDB</li>
        </ul>
      </div>
    `,
    link: "",
    video:
      "https://drive.google.com/file/d/1aNKXQFk0PS5VkIq5gyhEFVsJeN1tGNch/view",
    github: "https://github.com/SanketSonawane11/pilot-mapping",
  },
];
