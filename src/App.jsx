import TopNav from "./component/topnav";

function App() {
  return (
    <>
      <TopNav></TopNav>
      <body class="bg-[#121212] text-[#999999] text-lg font-lato">
        {/*Home Page */}
        <section
          id="home"
          class="pt-16
      flex flex-row justify-between px-24 min-h-screen"
        >
          <div class="text-lg content-center pl-8 mt-[-2rem]">
            <h2
              class="
          text-[#d4d4d4] text-6xl font-semibold text-left 
          ml-[-0.25rem] font-roboto-slab"
            >
              Hello,
            </h2>
            <h2 class="pt-4 pb-4">Welcome to my simple portfolio website</h2>
            <h2 class="pb-1 text-2xl">I'm</h2>
            <h1 class="text-[#dedede] text-2xl font-semibold">Frensy Fadli</h1>
          </div>
          <div
            class="max-w-[35%] content-center pr-24 
          "
          >
            <img
              src="./image/male_avatar.svg"
              class="bg-[#dedede] rounded-full"
            />
          </div>
        </section>

        {/*About Page */}
        <section
          id="about"
          class="pt-8
      flex flex-row justify-between px-24 min-h-screen"
        >
          <div class="max-w-[50%] content-center mr-12">
            <img src="./image/static_website.svg" class="bg-black rounded-xl" />
          </div>
          <div class="text-pretty content-center mt-[-1rem]">
            <h1 class="text-4xl pb-8 text-[#dedede] font-semibold">About me</h1>
            <p class="pb-8">
              A web developer student based in Indonesia. <br />
              Despite being in the early stages of practice, I'm looking forward
              to an exciting journey to master the art of creating beautiful and
              functional websites
            </p>
            <h1 class="text-2xl pb-4 text-[#dedede] font-semibold">My Tools</h1>
            <ul>
              <li>
                <span class="text-[#dedede] font-medium">Languages</span>: HTML,
                CSS, JavaScript, and excited to explore more
              </li>
              <li>
                <span class="text-[#dedede] font-medium">Frameworks</span>:
                Currently learning React and I'm eager to expand my toolkit
              </li>
            </ul>
            <p class="pt-2">
              The tech world evolves rapidly, and I'm committed to staying
              up-to-date. <br />
              From front-end frameworks like React to back-end technologies like
              Node.js
            </p>
          </div>
        </section>

        {/*Project Page */}
        <section
          id="project"
          class="pt-16
      flex flex-row justify-between px-24 min-h-screen"
        >
          <div class="content-center">
            <h1 class="text-4xl pb-8 text-[#dedede] font-semibold mt-[-10rem]">
              My Projects
            </h1>
            <p class="leading-10">
              No projects to showcase yet
              <br />
              <span class="italic">
                Will be updated after completing any exciting projects
              </span>
            </p>
          </div>
          <div class="max-w-[50%] content-center">
            <img src="./image/project_completed.svg" />
          </div>
        </section>

        {/*Contact Page */}
        <section
          id="contact"
          class="pt-16
      flex flex-row justify-between px-24 min-h-[95vh]"
        >
          <div class="max-w-[35%] content-center">
            <img src="./image/mailbox.svg" />
          </div>
          <div class="content-center text-pretty ml-32 mt-[-12rem]">
            <h1 class="text-4xl pb-8 text-[#dedede] font-semibold">
              Contact me
            </h1>
            <p class="pb-8">
              I'm open to collaboration, learning opportunities, and connecting
              with fellow developers. <br />
              Feel free to reach me out via email.
            </p>
            <a href="mailto:frenzy.lie@gmail.com">
              <button class="bg-[#d4d4d4] text-[#121212] p-4 rounded-md font-medium">
                Send me an email
              </button>
            </a>
          </div>
        </section>
      </body>

      <footer
        class="bg-gray-700
      text-[#d4d4d4] text-right pr-5"
      >
        &copy; 2024
      </footer>
    </>
  );
}

export default App;
