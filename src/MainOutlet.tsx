import { Container, Header, Link, Icon } from "@cloudscape-design/components";
import { FormattedMessage } from "react-intl";
import { Outlet } from "react-router-dom";

export default function MainOutlet({ path }) {
  return (
    <>
      {
        path === 'http://localhost:5174/' || path === 'http://127.0.0.1:5174/'
        ? (
          <Container
            header={
              <Header
                variant="h1"
                description={
                  <FormattedMessage
                    id="mainOutlet.header.description"
                    defaultMessage="You can also take a look at all of my content, and learn a thing or two about programming along the way! Let's do this."
                  />
                }
              >
                <FormattedMessage
                  id="mainOutlet.header"
                  defaultMessage="Welcome to IAmWintrow! Where you can learn all about me, Mitch Wintrow."
                  description=""
                />
              </Header>
            }
          >
            <Container
              header={
                <Header
                  variant="h2"
                  info={
                    <>
                      <Link
                        external
                        variant="info"
                        href="https://www.youtube.com/playlist?list=PLdTzP9CpAPt7a2IFbWjyQR9A44OoYonAf"
                      >
                        <Icon size="big"
                          svg={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
        </svg>
                          }
                        />
                      </Link>
                    </>
                  }
                  description="This is where my description for this video will go. Farther down under the video is where I'll actually have the content written."
                >
                  About me
                </Header>
              }
            >
              <iframe className="youtube-video" width="auto" height="auto" src="https://www.youtube.com/embed/KLrgkf58xxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Container>
          </Container>
        )
        : <Outlet/>
      }
    </>
  );
};