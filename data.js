const data = {
  experience: [
    {
      post: "Software Development Engineer",
      company: "PuStack",
      link: "https://pustack.com/",
      dates: "July 2020 - Present",
      span: "1 Month",
      stack: "Flutter, Dart, UI/UX",
      description: `Under this role, I will be responsible for provisioning scalable infrastructure enabling both the business and its customers through the means of cutting edge technological products. My primary tech stack for this role would be Flutter.`,
    },
    {
      post: "Technical Author",
      company: "Cypher Eruption",
      link: "https://cyphereruption.net",
      dates: "August 2014 - Sept 2016",
      span: "2 Years",
      stack: "VB.Net, Visual C#, Wordpress",
      description: `Cypher Eruption is a free place to learn best programming languages and ethical hacking. Be a learner and learn programming and ethical hacking or be a teacher and teach anything unique. We respect every single visitor, author, contributor. Because of you we are here.`,
    },
    {
      post: "Frontend Developer",
      company: "Developer Students Clubs, Chitkara University",
      link: "#",
      dates: "October 2019 - Present",
      span: "8 Months",
      stack: "HTML5, CSS, JavaScript, jQuery, Flutter",
      description: `Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.

`,
    },
  ],
  achievements: [
    {
      title: "3rd Rank",
      type: "award",
      css: "left: -8px",
      fa: "fa-trophy",
      linkTitle: "in Google Techstars Startup Weekend",
      link: " ",
    },
    {
      title: "1st Rank",
      type: "award",
      fa: "fa-trophy",
      linkTitle: "In Website Development Competition",
      link: " ",
      link2Title: "held at GNA University",
      link2: " ",
    },
    {
      title: "Hotspoter crossed 5 Million+ Downloads",
      type: "ANALYTICS",
      fa: "fa-star",
      linkTitle: "Softonic",
      link: "https://hotspoter.en.softonic.com",
      link2Title: "CNET",
      link2: "http://bit.ly/CNETHotspoter",
    },
    {
      title: "Chatter App got appreciated by Flutter Team",
      type: "appreciation",
      fa: "fa-twitter",
      linkTitle: "Tweet",
      link: "https://bit.ly/ChatterTweet",
    },
  ],
};

const experienceContainer = document.querySelector(".experience-container");
const achievementsContainer = document.querySelector(".achievements-container");

function experienceFetch(experience) {
  const result = `
            <div class="company">
                <h2>${experience.post} &nbsp;<a target="_blank" rel="noopener" href="${experience.link}"><small>@ ${experience.company}</small></a></h2>
                <div class="timespan"><span class="fa fa-calendar blue"></span> &nbsp; ${experience.dates},<small> ${experience.span}</small></div>
                <div class="experience-description">
                    <span class="stack blue">Stack: ${experience.stack}</span><br>
                    ${experience.description}
                </div>
            </div>
            `;

  return result;
}

function achievementFetch(achievement) {
  const result = `
            <div class="achievement">
                <span class="achievement-ico fa ${
                  achievement.fa
                } w3-xlarge dblue" style="${
    achievement.css || "left: -6px"
  };"></span>
                <h2> ${achievement.title}</h2>
                <span class="link">${
                  achievement.linkTitle
                }: <a class="blue" href="${achievement.link}">${
    achievement.link
  }</a></span><br/>
                ${
                  achievement.link2
                    ? `<span class="link">${achievement.link2Title}: <a class="blue" href="${achievement.link2}">${achievement.link2}</a></span>`
                    : ""
                }
            </div>
            `;

  return result;
}

achievementsContainer.innerHTML = data.achievements
  .map(achievementFetch)
  .join("");
experienceContainer.innerHTML = data.experience.map(experienceFetch).join("");

// MIGHT ADD THIS SOMTIME IN THE FUTURE

// function skillsFetch(skill) {
//   const result = `
//             <div class="skill" style="padding:5px 15px; position:relative">
//                 <h2>${skill.language}</h2>
//                 <span class="skill-score"><b>${
//                   skill.score
//                 }</b> <small>/ 10</small></span>
//                 <div class="skill-meter"><div class="skill-value" style="width:${
//                   skill.score * 10
//                 }%;"></div></div>
//             </div>
//             `;

//   return result;
// }
