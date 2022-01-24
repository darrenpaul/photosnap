import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import Articles from "../components/Articles";
import Services from "../components/Services";

const Home = () => {
  const callToActionData = [
    {
      id: 1,
      title: "Create and share your photo stories.",
      paragraph:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      image: "home/desktop/create-and-share.jpg",
      link: { text: "Get An Invite", url: "/invite" },
      backgroundColor: "bg-pure-black",
      textColor: "text-pure-white",
    },
    {
      id: 2,
      title: "beautiful stories every time.",
      paragraph:
        "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      image: "home/desktop/beautiful-stories.jpg",
      link: { text: "view the stories", url: "/invite", theme: "dark" },
      direction: "reverse",
      backgroundColor: "bg-pure-white",
      textColor: "text-pure-black",
    },
    {
      id: 3,
      title: "designed for everyone.",
      paragraph:
        "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
      image: "home/desktop/designed-for-everyone.jpg",
      link: { text: "view the stories", url: "/invite", theme: "dark" },
      backgroundColor: "bg-pure-white",
      textColor: "text-pure-black",
    },
  ];

  const servicesData = [
    {
      id: 1,
      image: "/features/desktop/responsive.svg",
      title: "100% Responsive",
      paragraph:
        "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      id: 2,
      image: "/features/desktop/no-limit.svg",
      title: "No Photo Upload Limit",
      paragraph:
        "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      id: 3,
      image: "/features/desktop/embed.svg",
      title: "Available to Embed",
      paragraph:
        "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    },
  ];

  return (
    <main className="bg-pure-black">
      {callToActionData.map((item) => (
        <CallToAction
          key={item.id}
          title={item.title}
          paragraph={item.paragraph}
          image={item.image}
          link={item.link}
          direction={item.direction}
          backgroundColor={item.backgroundColor}
          textColor={item.textColor}
        />
      ))}
      <Articles />
      <Services serviceData={servicesData} />
    </main>
  );
};

export default Home;
