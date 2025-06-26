import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web series</h2>
      <User name={"Avdhesh (function)"} />
      <UserClass name={"Avdhesh (class)"} />
    </div>
  );
};

export default About;
