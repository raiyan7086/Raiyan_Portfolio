import { BackgroundBeams } from "./components/BackgroundBeams";
import MovingCards from "./components/MovingCards";
import StickyScrollReveal from "./components/StickyScrollReveal";


function HeroSection() {
  const testimonials = [
    {
      quote:
        "Raiyan is the most talented web developer I have ever worked with. He can take complex concepts and turn them into beautiful, user-friendly designs.",
      name: "Raiyan, Project Manager",
      title: "Worked together at Acme Web Agency",
    },
    {
      quote:
        "No matter the project size, Samantha always delivers polished work on time and on budget. He is a true professional.",
      name: "Mark, CEO",
      title: "Founder of 123 Design Studio",
    },
    {
      quote:
        "Samantha's coding skills are unmatched. He writes clean, well-documented code that rarely needs debugging.",
      name: "Lisa, Lead Developer",
      title: "Worked together at XYZ Tech Firm",
    },
    {
      quote:
        "Samantha excels at both front-end and back-end programming. His diverse skillset allows him to take on any web development challenge.",
      name: "James, CTO",
      title: "Hired Samantha at ABC Web Services",
    },
    {
      quote:
        "Not only is Samantha an expert developer, he is also a thoughtful team member who helps others learn and grow.",
      name: "Emma, Web Developer",
      title: "Worked with Samantha at Startup Hub",
    },
  ];

  return (
    <div className="w-full h-screen  bg-black  bg-grid-white/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-32">
        <div className="w-full max-w-5xl h-1/2 flex flex-col-reverse sm:flex-row items-center gap-8 md:gap-16 text-left">

          <div className="w-full sm:w-full h-1/2 sm:h-full flex flex-col items-center sm:px-6">
            <p className="text-4xl sm:text-7xl font-bold relative z-20 py-8">Hello Sir</p>
            <p className="text-zinc-500 font-semibold text-center sm:text-left">
              I'm a passionate full-stack web developer with over 5 years of experience building stunning, responsive
              websites and web applications. Originally from Austin, TX, I moved to San Francisco in 2018 to expand my
              career opportunities in the thriving tech scene.
            </p>
          </div>

          <div className="w-full sm:w-full h-1/2 sm:h-full flex items-center justify-center px-12 sm:px-6">
            <p className="text-4xl sm:text-7xl font-bold relative z-20 ">
              I'm Raiyan
            </p>
          </div>
        </div>

        <div className="w-full max-w-5xl h-1/2 flex gap-4  flex-col items-center">
          <h3 className="font-bold text-2xl sm:text-4xl text-center"> What did my colleagues say?</h3>
          <MovingCards items={testimonials} speed="slow" className="w-full" />
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const content = [
    {
      title: "To-Do Web Application",
      description:
        "A web app that allows users to create, edit, and manage personal to-do lists. Features user accounts, categorization, and reminder emails.",
    },
    {
      title: "Weather Dashboard",
      description:
        "A dashboard that displays current and forecasted weather data for cities searched by the user. Uses a weather API to retrieve real-time data.",
    },
    {
      title: "Book Library Manager",
      description:
        "An application for tracking personal book collections and managing loans to friends. Includes a database, search functionality, and generated reports.",
    },
    {
      title: "Travel Planner Web App",
      description:
        "Plan and organize trip itineraries with this web app. Save destinations, create day-by-day agendas, keep track of reservations.",
    },
    {
      title: "Recipe Box",
      description:
        "A place for users to store, tag, share, and rate recipes. Features image uploads, search filters, and the ability to add ingredients to a grocery list.",
    },
    {
      title: "Social Network",
      description:
        "An internal social network for an organization's employees. Profiles, posts, comments, groups, and even elements like stories and reels.",
    },
  ];

  return (
    <div className="w-full h-screen  bg-black flex items-center justify-center flex-col gap-16">
      <h2 className="text-5xl font-bold">My Projects</h2>
      <StickyScrollReveal content={content} />
    </div>
  );
}

function ContactSection() {
  return (
    <div className="h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-2">
        <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Me
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Do you have an exciting project, want to hire me, or maybe just chat? Feel free to leave your email down
          below!
        </p>
        <input
          type="text"
          placeholder="example@email.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-2"
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
          Send Email
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}

function App() {
  return (
    <div className="h-fit w-full text-white">
      <HeroSection />
      <ProjectsSection />
     <ContactSection />
    </div>
  );
}

export default App;
