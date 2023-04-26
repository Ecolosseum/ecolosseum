const main = document.getElementsByClassName("main")[0];

function addCard(name, eligibility, description, banner, participants, url) {
  const query = `
<div class="p-4 md:w-1/3">
<div
  class="card h-full border-2 border-white border-opacity-60 rounded-lg overflow-hidden"
  onclick="window.open('${url}', '_blank')"
>
  <img
    class="lg:h-48 md:h-36 w-full object-cover object-center"
    src="${banner}"
    alt="banner"
  />
  <div class="p-6">
    <h2
      class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
    >
      GRADES: ${eligibility.join(" - ")}
    </h2>
    <h1 class="title-font text-lg font-medium text-gray-300 mb-3">
      ${name}
    </h1>
    <p class="leading-relaxed mb-3 text-gray-400">
      ${description}
    </p>
    <div class="flex items-center flex-wrap">
      <a
        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
        >Register Now
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <span
        class="text-gray-400 inline-flex items-right lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 "
      >
      <i class="px-2 fa-regular fa-user"></i>${participants}
      </span>
    </div>
  </div>
</div>
</div>
`;

  main.innerHTML += query;
}

const events = [
  {
    name: "PresenPro",
    eligibility: [4, 5],
    description:
      "Create innovative presentation about responsible consumption and production",
    banner:
      "https://geekflare.com/wp-content/uploads/2023/01/What-to-Look-for-in-An-Online-Presentation-Tool.png",
    participants: 2,
    url: "https://forms.gle/AdiGsS5hj4kYVXUt5",
  },
  {
    name: "Cinematica",
    eligibility: [9, 11],
    description:
      "Unleash your creativity! Join our film making competition and let your story shine",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI9obEIzcjU0nDbg-r28asdztvKV5w95dSg&usqp=CAU",
    participants: 2,
    url: "https://forms.gle/RSqpk7GrRbzv7qec6",
  },
  {
    name: "Sketchup",
    eligibility: [3],
    description:
      "Design digital artwork focussing on Good health and well being on MS Paint",
    banner:
      "https://img.freepik.com/premium-vector/one-continuous-line-drawing-heart-hands-symbol-care-save-health-simple-linear-style-icon-concept-volunteering-charity-thanksgiving-logo-doodle-vector-illustration_306763-1190.jpg",
    participants: 1,
    url: "https://forms.gle/NUhGbZHddtZQWDYEA",
  },
  {
    name: "TechAttire",
    eligibility: [1, 2],
    description:
      "Dress up to show any technical advancement and state it's importance",
    banner:
      "https://img.freepik.com/premium-photo/people-cyber-reality_622301-1398.jpg",
    participants: 1,
    url: "https://forms.gle/wxXG1XgjZ7ypA2Mk7",
  ,
  {
    name: "EcoTech",
    eligibility: [1, 2],
    description:
      "Generating best out of waste material from E-Waste to promote global SDGs",
    banner:
      "https://media.istockphoto.com/id/1032912050/photo/e-waste-heap-from-discarded-laptop-parts.jpg?s=612x612&w=0&k=20&c=0GhFIqXKK1bRzdyMugLkB5Dj7spnwmhgVhRJEwBgoO8=",
    participants: "1-2",
    url: "https://forms.gle/6JCizt1E75MrRkuP6",
  },
  {
    name: "CreateX",
    eligibility: [4, 5],
    description:
      "Use your spatial skills to write a word document on SDG-7 in a presentable manner",
    banner:
      "https://www.shutterstock.com/image-vector/sustainable-energy-word-cloud-260nw-53764555.jpg",
    participants: 1,
    url: "https://forms.gle/beQSmenEy52Wieg79",
  },
  {
    name: "FusionFX",
    eligibility: [9, 12],
    description:
      "Get creative and showcase your skills in our thrilling Photoshop competition",
    banner: "https://i.ytimg.com/vi/l7r4EdSGrbk/maxresdefault.jpg",
    participants: 2,
    url: "https://forms.gle/9ERz4q4aAQa5cfhx9",
  },
  {
    name: "Snapshot",
    eligibility: [9, 12],
    description:
      "Capture shots using your naturalistic skills combined with photography",
    banner:
      "https://img.freepik.com/premium-photo/having-skills-snapshot-childhood-teen-girl-taking-photo-kid-use-digital-camera-child-photographer-with-camera-horizontal-poster-banner-with-copy-space_545934-38790.jpg",
    participants: 1,
    url: "https://forms.gle/ScSDcLcDfsfBSWmQ7",
  },
  {
    name: "PlayOffs",
    eligibility: [1, 12],
    description:
      "Level up your skills and dominate the competition in our thrilling gaming showdown",
    banner: "https://i.ytimg.com/vi/Zfsg3oiPXGc/maxresdefault.jpg",
    participants: 5,
    url: "https://forms.gle/6Akwnpn8JtV4iHxs8",
  },
  {
    name: "App-A-Thon",
    eligibility: [11, 12],
    description:
      "Building AI based application to address SDG: Good Health and Well Being",
    banner: "https://i.imgur.com/nuXeEj9.jpg",
    participants: 2,
    url: "https://forms.gle/3rmCYnnJeXfiz25Z8",
  },
  {
    name: "ChatterBox",
    eligibility: [11, 12],
    description:
      "Write a chatbot to compete in this Artificial Intelligence controlled world",
    banner:
      "https://i0.wp.com/ohmybot.net/wp-content/uploads/2020/03/chatbot-banner.png?ssl=1",
    participants: 2,
    url: "https://forms.gle/dPe2CkDbRZSuUro26",
  },
  {
    name: "3DesignDynamic",
    eligibility: [9, 12],
    description:
      "Model and visualise your idealistic worlds by putting your creative minds to test",
    banner:
      "https://cdn.dribbble.com/users/4823084/screenshots/18863071/media/78f0367c4d388ee5e37524cee27cf1ee.png?compress=1&resize=400x300",
    participants: 2,
    url: "https://forms.gle/t5G6fY4ZRj2rfmvRA",
  },
  {
    name: "PromptToPrototype",
    eligibility: [8, 12],
    description:
      "Rule the AGI ran world by creating prompts which generate the most precise outputs",
    banner:
      "https://www.marktechpost.com/wp-content/uploads/2023/02/Newsletter-Banner-Thumbnail-Beehiiv-4.jpg",
    participants: 1,
    url: "https://forms.gle/HUWwtThzGS5XoxhB6",
  },
  {
    name: "CodeCon",
    eligibility: [11, 12],
    description:
      "Test your brainstorming skills to solve maths problems with the help of Python",
    banner:
      "https://img.freepik.com/premium-vector/web-development-coding-programming-futuristic-banner-computer-code-laptop_3482-5582.jpg",
    participants: 2,
    url: "https://forms.gle/JkwCeNpg6ih23pAC9",
  },
  {
    name: "BizTechX",
    eligibility: [11, 12],
    description:
      "AI business event to present original startup ideas using considering all necessary asepcts",
    banner:
      "https://img.freepik.com/photos-premium/icone-magasinage-ligne-telephone-intelligent-pour-concept-global_117856-2469.jpg",
    participants: 2,
    url: "https://forms.gle/G9zHTnNAQykX555L8",
  },
  {
    name: "ByteBeat",
    eligibility: [6, 11],
    description:
      "Show off your flow of ideas via your moves and let the world recognise your talent",
    banner:
      "https://www.noblemotiondance.com/wp-content/uploads/2022/01/NobleMotion-Dance-MAN-OVERBOARD-Photographer-Lynn-Lane-WEB-4-600x400.jpg",
    participants: "10-12",
    url: "https://forms.gle/AFK9MYVZ75ebQh5Y9",
  },
  {
    name: "BotBrawl",
    eligibility: [7, 9],
    description:
      "Get brawling by building bots to cross hurdles in the least possible time",
    banner:
      "https://t3.ftcdn.net/jpg/01/80/97/92/360_F_180979216_dsMX0jqo0MrflzwSs86rQuIrxVHbbPW5.jpg",
    participants: 3,
    url: "https://forms.gle/1H7FEzvaRSUeB8DAA",
  },
  {
    name: "Perspective",
    eligibility: [9, 11],
    description:
      "Innovating solutions for patients suffering with common diseases using Arduino",
    banner:
      "https://www.electronicaembajadores.com/datos/fotos/articulos/grandes/lc/lca1/lca1k81.jpg",
    participants: 2,
    url: "https://forms.gle/iHCY2LagzUjy3deY7",
  },
  {
    name: "VoiceItOut",
    eligibility: [12],
    description:
      "Round table conference on the emerging Artificial Intelligence hot topics",
    banner:
      "https://j6p3d5c7.stackpathcdn.com/wp-content/uploads/2013/02/discussion-two-people.jpg",
    participants: 2,
    url: "https://forms.gle/hwAeLTGJhrCDm52G7",
  },
  {
    name: "Remage",
    eligibility: [7, 8],
    description: "Narrate a wonderful story using your developer and linguistic skills",
    banner: "https://www.microsoft.com/en-us/research/uploads/prod/2019/08/MakeCode-Arcade_Site_08_2019_1400x788.png",
    participants: 2,
    url: "https://forms.gle/AVw4F39MpSuz6kwx7"
  }
];

events.forEach((event) => {
  addCard(
    event.name,
    event.eligibility,
    event.description,
    event.banner,
    event.participants,
    event.url
  );
});
