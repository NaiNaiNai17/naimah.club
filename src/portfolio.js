const header = {
  homepage: 'www.naimah.club',
  title: 'Nai(mah) Fowler',
}

const about = {

  role: 'Software Engineer',
  description:
    `I started coding in 2017 using html, css and some javascript. In 2020 I decided to go full in and began a  full-time 14 month Web Developer course at the Digital Career Institute. Going back to school gave me the opportunity to build a solid foundation in Frontend and Backend Technologies, and now I can build web apps.`,
    description2: `I bought this domain in 2019 because I wanted to build a resume site. I choose the .club extension because it's open to interpretation. The club is where I have met and/or bonded with some of my best friends. A club can also be a group, or community in which I belong to many. I'm based in Berlin`,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/nai-fowler/',
    github: 'https://github.com/nainainai17',
  },
}

const projects = [

  {
    name: 'Story Share App',
    description:
      `A story sharing app where users can share public or private stories. Ideally with communities in mind. Like a neighborhood journal.
       App uses node js, express, handlebars. It implements google auth and email(still working this out) registration auth both using passport.`,
    stack: ['Node JS', 'Express JS', 'Passport JS','handlebars'],
    sourceCode: 'https://github.com/NaiNaiNai17/storyShare-a-Kiez-Journal',
    livePreview: 'https://storyshare-journal.glitch.me/',
  },
  {
    name: 'Tap Music App',
    description:
      `Music sampler with 6 functions. Use keys A-F, Tap keys directly on touchscreen, or use your mouse to play sounds.`,
    stack: ['Javascript', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/NaiNaiNai17/Tap-Music-using-Javascript',
    livePreview: 'https://nainainai17.github.io/Tap-Music-using-Javascript/',
  },
  {
    name: 'Emoji Finder',
    description:
      'Search for Emoji you want to reflect the moment. Uses react styling components',
    stack: ['React'],
    sourceCode: 'https://github.com/NaiNaiNai17/Emoji-Search-Engine-in-react',
    livePreview: 'https://emoji-search-engine.glitch.me/',
  },
  {
    name: 'Interactive Music Video Tutorial co-writer',
    description:
      `The video tutorial teaches users how to code your own visually creative music video using video, audio, the Hydra livecoding library html, css and javascript. co-written with Oliva Jack`,
    stack: ['Javascript', 'HTML', 'CSS', 'Hydra'],
    sourceCode: 'https://glitch.com/embed/#!/interactive-music-video',
    livePreview: 'https://interactive-music-video.glitch.me/',
  },
]


const skills = [
  
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Node JS',
  'Express JS',
  'MongoDB',
  'NoSql',
  'Mongoose',
  'OAuth',
  'JWT',
  'Git',
  
  
]

const learning = [
  'Google Cloud',
  'Docker',
  'GraphQL'
]

const contact = {
  email: 'fowler.naimah@gmail.com',
}

export { header, about, projects, skills, contact, learning }
