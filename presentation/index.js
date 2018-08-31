// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear
} from "spectacle";
import { SocialIcon } from 'react-social-icons';


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#C4183C",
  secondary: "#1F2022",
  tertiary: "#fff",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={6} lineHeight={1} textColor="primary">
            Roadmap to Becoming a Successful Developer in 2018
          </Heading>
          <Text margin="40px" textColor="primary">by <b>Damodar Lohani</b></Text>
          <Text margin="40px" textSize="30" textColor="secondary">
          <SocialIcon url="https://github.com/lohanidamodar" /> &nbsp;
          <SocialIcon url="https://youtube.com/c/reactbits" /> &nbsp;
          <SocialIcon url="https://facebook.com/lohanidamodar" /> &nbsp;
          <SocialIcon url="https://twitter.com/lohanidamodar" />
          <br />
            <a style={{ color: "#2196F3" }} href="https://github.com/lohanidamodar" target="_blank">
              github.com/lohanidamodar 
            </a><br />
            <a style={{ color: "#2196F3" }} href="https://fb.me/lohanidamodar" target="_blank">
              fb.me/lohanidamodar
            </a><br />
            <a style={{ color: "#2196F3" }} href="https://twitter.com/lohanidamodar" target="_blank">
              twitter.com/lohanidamodar
            </a><br />
             <a style={{ color: "#2196F3" }} href="https://www.youtube.com/c/reactbits" target="_blank">
              youtube.com/c/reactbits
            </a><br />
            <a style={{ color: "#2196F3" }} target="_blank" href="mailto:dlohani48@gmail.com">dlohani48@gmail.com</a> <br />
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>It's Not Easy</Heading>
          <List>
            <Appear>
              <ListItem>Wide Varieties of Technologies</ListItem>
            </Appear>
            <Appear>
            <ListItem>Tons of information</ListItem>
            </Appear>
            <Appear>
            <ListItem>Lot's of different ways</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>But, You Can Do It</Heading>
          <List>
            <Appear>
            <ListItem>Consistency is the Key.</ListItem>
            </Appear>
            <Appear>
            <ListItem>Keep Learning and Keep Improving.</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={6} textColor="primary" caps>It's Not Only Coding</Heading>
          <List>
            <Appear>
            <ListItem>Understand and Use Tools</ListItem>
            </Appear>
            <Appear>
            <ListItem>Learn related technologies</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary">Non Coding Stuffs You Need</Heading>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary">IDEs or Text Editors</Heading>
          <List>
            <ListItem>Sublime</ListItem>
            <ListItem>Atom</ListItem>
            <ListItem ><strong>VS Code</strong></ListItem>
            <ListItem>Intellij, PHP Storm, Web Storm, Dreamweaver,....</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={1} fit textColor="tertiary">Browser</Heading>
          <List>
            <ListItem><strong>Chrome</strong></ListItem>
            <ListItem>Firefox</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary">Command Line</Heading>
          <List>
            <ListItem>Basics of Command Line (Bash) </ListItem>
            <ListItem>Folder Navigation/File and Folder Creation</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={1} fit textColor="tertiary">Version Control</Heading>
          <List>
            <ListItem>Git and git commands </ListItem>
            <ListItem>Repositories - Gitlab, Bitbucket, Github</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary">Package Management</Heading>
          <List>
            <ListItem>NPM </ListItem>
            <ListItem ><strong>Yarn</strong></ListItem>
            <ListItem ><strong>Composer</strong></ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={1} fit textColor="tertiary">Basics of Design</Heading>
          <List>
            <ListItem>Photoshop </ListItem>
            <ListItem>Wireframing Tools</ListItem>
            <ListItem><strong>Adobe XD</strong></ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary">APIs</Heading>
          <List>
            <ListItem>How APIs work </ListItem>
            <ListItem >REST APIs </ListItem>
            <ListItem>Authorization/Authentication</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={1} fit textColor="tertiary">Database</Heading>
          <List>
            <ListItem>MongoDB </ListItem>
            <ListItem>Postgre SQL </ListItem>
            <ListItem>Firebase </ListItem>
            <ListItem><strong>MySQL/Mariadb</strong></ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary">Devops & Deploying</Heading>
          <List>
            <ListItem>FTP/SSH</ListItem>
            <ListItem > Dedicated Servers and VPS </ListItem>
            <ListItem>Cloud Hosting</ListItem>
            <ListItem>Server Maintenance</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary">Coding Stuffs</Heading>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary">Chosing Right Technology</Heading>
          <Text>There is no right technology</Text>
          <List>
            <ListItem>Size and Activeness of Community</ListItem>
            <ListItem>Demand of Manpower</ListItem>
            <ListItem>Available Learning Resources</ListItem>
            <ListItem>Type of Develper you want to become (Frontend, Backend, Mobile, Enterprise)</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary">Choose Few and Go Deeper</Heading>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary">Frontend Technologies</Heading>
          <Text fit>Those that I think have the higher potential</Text>
          <List>
            <ListItem>HTML, CSS and Javascript is a must</ListItem>
            <ListItem>Bootstrap/Bulma like CSS Frameworks</ListItem>
            <ListItem>React Js</ListItem>
            <ListItem>Angular</ListItem>
            <ListItem>Webpack</ListItem>
            <ListItem>Babel</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={1} fit textColor="tertiary">Backend Technologies</Heading>
          <Text fit>Those that I think have the higher potential</Text>
          <List>
            <ListItem>NodeJs, Express, Hapi.JS, Loopback</ListItem>
            <ListItem>PHP, Laravel, Codeigniter, Wordpress</ListItem>
            <ListItem>Python, Django, Flask</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>C#</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary">Mobile Technologies</Heading>
          <Text fit>Those that I think have the higher potential</Text>
          <List>
            <ListItem>React Native</ListItem>
            <ListItem>Ionic</ListItem>
            <ListItem>Native Android/iOS</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={1} fit textColor="tertiary">My Technology Stack</Heading>
          <Text fit>I am a Web + Mobile Developer (A Fullstack Developer) </Text>
          <List>
            <ListItem>PHP with Laravel and Wordpress</ListItem>
            <ListItem>React Js</ListItem>
            <ListItem>Electron</ListItem>
            <ListItem>React Native</ListItem>
            <ListItem>Debian Linux VPS</ListItem>
            <ListItem>Docker</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary">Important Tips</Heading>
          <Text fit>Stay Hungry, Stay Foolish (Confidence & Consistence)</Text>
          <List>
            <ListItem>You Don't Need to Know Everything</ListItem>
            <ListItem>You Don't Need to Remember Everything</ListItem>
            <ListItem>Use Resources Wisely</ListItem>
            <ListItem>Admit When you don't Know &</ListItem>
            <ListItem>Ask For Help</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary">Questions??</Heading>
          <Heading size={5}>Thank You</Heading>
        </Slide>
      </Deck>
    );
  }
}
