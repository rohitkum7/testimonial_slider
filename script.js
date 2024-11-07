const testimonals = [
  {
    photo: "./profile_pictures/pexels-justin-shaifer-501272-1222271.jpg",
    para: `Working with Haland on the recent product launch campaign was a true
        pleasure.Their strategic thinking and ability to translate complex
        marketing goals into actionable plans were instrumental in achieving
        record-breaking sales figures. They consistently delivered innovative
        ideas and effectively managed a diverse team, making them a valuable
        asset to any marketing department`,
    person: "Justin Shaifer",
  },
  {
    photo: "./profile_pictures/pexels-olly-733872.jpg",
    para: `I've had the opportunity to collaborate with Vinicius on several complex software development projects, and their technical proficiency and problem-solving abilities are truly exceptional. They consistently deliver high-quality code on time, even under tight deadlines, and are always willing to share their knowledge to help others on the team.`,
    person: "Olly Molly",
  },
  {
    photo: "./profile_pictures/pexels-stefanstefancik-91227.jpg",
    para: `Sabrish has a remarkable knack for building strong client relationships and consistently exceeding sales targets. Their dedication to understanding customer needs and their ability to tailor solutions to those needs has been key to their success. I highly recommend them to anyone looking for a reliable and results-oriented sales professional`,
    person: "Stefan Josep",
  },
  {
    photo: "./profile_pictures/pexels-simon-robben-55958-614810.jpg",
    para: ` As a project manager, Rodrygo stands out for their exceptional ability
        to keep complex projects on track and deliver successful outcomes. Their
        strong leadership skills, combined with meticulous planning and
        effective communication, ensure seamless execution even in demanding
        environments.`,
    person: "Simon Robben",
  },
];

let image = document.getElementById("image");
let testimonal = document.getElementById("testimonal");
let name = document.getElementById("name");

let interval = null;
let i = 0;

function change(value) {
  image.src = testimonals[value].photo;
  testimonal.innerHTML = testimonals[value].para;
  name.innerHTML = testimonals[value].person;
}

interval = setInterval(() => {
  if (i > testimonals.length - 1) {
    i = 0;
  } else {
    change(i);
    i++;
  }
}, 10000);
