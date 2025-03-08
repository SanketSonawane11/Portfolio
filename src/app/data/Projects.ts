export const projects = [
  {
    category: "Web",
    title: "Managerrr - Project Management Software (In Progress)",
    src: "/Projects/Managerrr.svg",
    content: `
      <div class='p-4 md:p-6 lg:p-8'>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Overview:</strong> Managerrr is a lightweight yet powerful project management software designed for small teams and freelancers. It offers a streamlined approach to task management, team collaboration, and project tracking, making it easy to stay on top of deadlines and responsibilities.
        </p>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Key Features:</strong>
        </p>
        <ul class='list-disc list-inside mb-4 space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Task Management: Assign, track, and update tasks effortlessly.</li>
          <li class='text-base md:text-lg lg:text-xl'>Real-time Collaboration: Stay connected with your team through live updates.</li>
          <li class='text-base md:text-lg lg:text-xl'>Team Performance Scoring: Weighted scoring system to track contributions effectively.</li>
          <li class='text-base md:text-lg lg:text-xl'>Gantt Chart: Visualize project timelines for better planning.</li>
          <li class='text-base md:text-lg lg:text-xl'>Calendar Integration: Sync tasks with Google Calendar or Outlook. [Upcoming]</li>
          <li class='text-base md:text-lg lg:text-xl'>Email Notifications: Get notified about task updates and deadlines. [Upcoming]</li>
        </ul>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Technologies:</strong>
        </p>
        <div class='mb-4'>
          <h4 class='text-base md:text-lg lg:text-xl font-semibold mb-2'>Frontend:</h4>
          <ul class='list-disc list-inside space-y-2'>
            <li class='text-base md:text-lg lg:text-xl'>React.js (Vite)</li>
            <li class='text-base md:text-lg lg:text-xl'>Tailwind CSS</li>
            <li class='text-base md:text-lg lg:text-xl'>Recoil</li>
          </ul>
          <h4 class='text-base md:text-lg lg:text-xl font-semibold mb-2 mt-4'>Backend:</h4>
          <ul class='list-disc list-inside space-y-2'>
            <li class='text-base md:text-lg lg:text-xl'>Node.js</li>
            <li class='text-base md:text-lg lg:text-xl'>Express.js</li>
            <li class='text-base md:text-lg lg:text-xl'>MongoDB</li>
            <li class='text-base md:text-lg lg:text-xl'>Supabase (Authentication & Database Management)</li>
          </ul>
        </div>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Future Enhancements:</strong>
        </p>
        <ul class='list-disc list-inside space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Team Meetings: Integrated video and chat for discussions.</li>
          <li class='text-base md:text-lg lg:text-xl'>More Customization Options: Personalized dashboards and themes.</li>
        </ul>
      </div>
    `,
    link: "https://managerrr.vercel.app",
    github: "https://github.com/SanketSonawane11/Managerrr",
  },
  {
    category: "Web",
    title: "Campus Chronicles: Notes Sharing Platform",
    src: "/Projects/CampusChronicles.jpg",
    content: `
        <div class='p-4 md:p-6 lg:p-8'><p class='text-base md:text-lg lg:text-xl mb-4'>(This website is not responsive since this is one of my very early projects) </br> Campus Chronicles is a dynamic platform designed to facilitate the exchange of academic resources among college students.</p><p class='text-base md:text-lg lg:text-xl mb-4'><strong class='font-semibold'>Features:</strong></p><ul class='list-disc list-inside mb-4 space-y-2'><li class='text-base md:text-lg lg:text-xl'>Browse and download notes based on branch and year</li><li class='text-base md:text-lg lg:text-xl'>Upload notes for others to access</li></ul><p class='text-base md:text-lg lg:text-xl mb-4'><strong class='font-semibold'>Technologies:</strong></p><div class='mb-4'><h4 class='text-base md:text-lg lg:text-xl font-semibold mb-2'>Frontend:</h4><ul class='list-disc list-inside space-y-2'><li class='text-base md:text-lg lg:text-xl'>Next.js</li><li class='text-base md:text-lg lg:text-xl'>GSAP</li><li class='text-base md:text-lg lg:text-xl'>Context API</li></ul><h4 class='text-base md:text-lg lg:text-xl font-semibold mb-2 mt-4'>Backend:</h4><ul class='list-disc list-inside space-y-2'><li class='text-base md:text-lg lg:text-xl'>Node.js</li><li class='text-base md:text-lg lg:text-xl'>Express.js</li><li class='text-base md:text-lg lg:text-xl'>MongoDB</li></ul></div><p class='text-base md:text-lg lg:text-xl mb-4'><strong class='font-semibold'>Future Enhancements:</strong></p><ul class='list-disc list-inside space-y-2'><li class='text-base md:text-lg lg:text-xl'>Branch-wise timetable to help students manage their schedules</li><li class='text-base md:text-lg lg:text-xl'>Announcements for sharing important updates, either general or specific to branches/years</li></ul></div>
      `,
    link: "https://campuschronicles.netlify.app/",
    github: "",
  },
  {
    category: "Web",
    title: "Payments App",
    src: "/Projects/Payments.jpg",
    content: `
      <div class='p-4 md:p-6 lg:p-8'>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Description:</strong> A payments app where users can send and receive money from registered users. Added a custom hook to prevent unauthorized access.
        </p>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Frontend:</strong>
        </p>
        <ul class='list-disc list-inside mb-4 space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Next.js</li>
          <li class='text-base md:text-lg lg:text-xl'>Recoil - State Management</li>
          <li class='text-base md:text-lg lg:text-xl'>Aceternity Ui</li>
        </ul>
        <p class='text-base md:text-lg lg:text-xl mb-4'>
          <strong class='font-semibold'>Backend:</strong>
        </p>
        <ul class='list-disc list-inside mb-4 space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Node.js & Express.js</li>
          <li class='text-base md:text-lg lg:text-xl'>ZOD (Input validation)</li>
          <li class='text-base md:text-lg lg:text-xl'>JWT</li>
          <li class='text-base md:text-lg lg:text-xl'>MongoDB</li>
          <li class='text-base md:text-lg lg:text-xl'>Node.js transactions for secure, reliable, and robust payment transfers</li>
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
        <p class='text-base md:text-lg lg:text-xl mb-4'>This Pilot-Searching project is currently live. However, since API calls are limited, please refer to the video for a complete demonstration. If you're a recruiter, kindly check the GitHub repository for more details. Please avoid using the live link casually; the video provided showcases the project in action.</p>
        <p class='text-base md:text-lg lg:text-xl mb-4'><strong class='font-semibold'>Project Overview:</strong></p>
        <p class='text-base md:text-lg lg:text-xl mb-4'>This project involves mapping drone flying pilots using a map interface. The data includes pilot details such as name, profile image, work experience, location, and geolocation coordinates. The map displays pilot locations with tooltips and an icon representing the live location of the admin viewing the map.</p>
        <p class='text-base md:text-lg lg:text-xl mb-4'><strong class='font-semibold'>Features:</strong></p>
        <ul class='list-disc list-inside mb-4 space-y-2'>
          <li class='text-base md:text-lg lg:text-xl'>Map integration using an open-source service like React-Leaflet or MapMyIndia.</li>
          <li class='text-base md:text-lg lg:text-xl'>Displays pilot data on the map with location icons and tooltips.</li>
          <li class='text-base md:text-lg lg:text-xl'>Real-time admin location tracking on the map.</li>
          <li class='text-base md:text-lg lg:text-xl'>Pilot matching feature based on work experience and proximity.</li>
          <li class='text-base md:text-lg lg:text-xl'>Filtering pilots within a specific kilometer range from the admin’s location.</li>
        </ul>
        <p class='text-base md:text-lg lg:text-xl mb-4'><strong class='font-semibold'>Technologies:</strong></p>
        <div class='mb-4'>
          <h4 class='text-base md:text-lg lg:text-xl font-semibold mb-2'>Frontend:</h4>
          <ul class='list-disc list-inside space-y-2'>
            <li class='text-base md:text-lg lg:text-xl'>Next.js</li>
            <li class='text-base md:text-lg lg:text-xl'>Mapbox API</li>
          </ul>
          <h4 class='text-base md:text-lg lg:text-xl font-semibold mb-2 mt-4'>Backend:</h4>
          <ul class='list-disc list-inside space-y-2'>
            <li class='text-base md:text-lg lg:text-xl'>Node.js</li>
            <li class='text-base md:text-lg lg:text-xl'>Express.js</li>
            <li class='text-base md:text-lg lg:text-xl'>MongoDB</li>
          </ul>
        </div>
      </div>
    `,
    link: "",
    video:
      "https://drive.google.com/file/d/1aNKXQFk0PS5VkIq5gyhEFVsJeN1tGNch/view?usp=drive_link",
    github: "https://github.com/SanketSonawane11/pilot-mapping",
  },
  {
    category: "Web",
    title: "Open Graph Image Generator",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
    <div class='p-4 md:p-6 lg:p-8'>
      <p class='text-base md:text-lg lg:text-xl mb-4'>
        <strong class='font-semibold'>Overview:</strong> The Post Image Generator allows users to create and customize images based on input. Users can add a title, content, and an optional image to generate a customized image that is then uploaded to Supabase. The generated image can be viewed and shared using its public URL.
      </p>
      <p class='text-base md:text-lg lg:text-xl mb-4'>
        <strong class='font-semibold'>Key Features:</strong>
      </p>
      <ul class='list-disc list-inside mb-4 space-y-2'>
        <li class='text-base md:text-lg lg:text-xl'>Customizable Images: Users can create images with custom text and optional image uploads.</li>
        <li class='text-base md:text-lg lg:text-xl'>Image Storage: Images are stored securely using Supabase Storage.</li>
        <li class='text-base md:text-lg lg:text-xl'>Public URL: Users receive a public URL to view and share the generated image.</li>
      </ul>
    </div>`,
    link: "https://og-generator-nine.vercel.app",
    github: "https://github.com/SanketSonawane11/OG-generator",
  },
  {
    category: "Web",
    title: "Landing Page: RenewE",
    src: "/Projects/RenewE.jpg",
    content: `
      <div class='p-4 md:p-6 lg:p-8'>
      <p class='text-base md:text-lg lg:text-xl mb-4'>  
        <strong class='font-semibold'>Made using:</strong> React.js (Vite)
      </p>
      <p class='text-base md:text-lg lg:text-xl mb-4'>
        <strong class='font-semibold'>Description:</strong> Responsive design.
      </p>
    </div>
    `,
    link: "https://renew-e.netlify.app/",
    github: "https://github.com/SanketSonawane11/RenewE-Landing-Page",
  },
  {
    category: "Web",
    title: "Landing Page: KoinX",
    src: "/Projects/KoinX.jpg",
    content: `
    <div class='p-4 md:p-6 lg:p-8'>
      <p class='text-base md:text-lg lg:text-xl mb-4'>
        <strong class='font-semibold'>Made using:</strong> Next.js
      </p>
      <p class='text-base md:text-lg lg:text-xl mb-4'>
        <strong class='font-semibold'>Description:</strong> Integrated tradingView and CoinGecko’s API to display the current rate and top coins and their status from the past 24 hours respectively.
      </p>
    </div>
    `,
    link: "https://koinx-btcn.netlify.app/",
    github: "https://github.com/SanketSonawane11/KoinX",
  },
];
