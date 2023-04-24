import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import AppLayout from '@cloudscape-design/components/app-layout';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Select from '@cloudscape-design/components/select';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import { topNavIdentityProps, topNavi18nStringsProps } from './props/App/App';
import MainOutlet from './MainOutlet';

function App({language, changeLanguage}) {
  const [path, setPath] = useState(window.location.href);
  const [activeHref, setActiveHref] = useState();

  useEffect(() => {
    setPath(window.location.href);
  }, [window.location.href])

  return (
    <>
      <ContentLayout
        header={
          <TopNavigation
            identity={topNavIdentityProps}
            utilities={[]}
            i18nStrings={topNavi18nStringsProps}
            search={
              <Select
              selectedOption={language}
              onChange={({ detail }) => changeLanguage(detail.selectedOption.value)}
              options={[
                { label: "Arabic", value: "ar" },
                { label: "Chinese (CN)", value: "zh" },
                { label: "Chinese (TW)", value: "zh-TW" },
                { label: "English", value: "en" },
                { label: "French", value: "fr" },
                { label: "German", value: "de" },
                { label: "Greek", value: "el" },
                { label: "Hebrew", value: "he" },
                { label: "Hindi", value: "hi" },
                { label: "Italian", value: "it" },
                { label: "Japanese", value: "ja" },
                { label: "Korean", value: "ko" },
                { label: "Russian", value: "ru" },
                { label: "Spanish", value: "es" },
                { label: "Vietnamese", value: "vi" },
              ]}
              placeholder="Choose a language bro"
              selectedAriaLabel="Selected"
              empty="No languages"
              loadingText="Loading languages"
              // statusType="none"
            />
            }
          />
        }
      >
        <AppLayout
          navigation={
            <SideNavigation
              header={{
                href: '#/',
                text: 'Main Menu',
              }}
              items={[
                {
                  type: 'link',
                  text: 'Home',
                  href: '/',
                },
                {
                  type: 'expandable-link-group',
                  text: 'Blog',
                  href: '/blog',
                  items: [
                    {
                      type: 'link',
                      text: 'All',
                      href: '/blogs',
                    },
                    {
                      type: 'link',
                      text: 'Software Engineering',
                      href: '/blogs/software-engineering',
                    },
                  ],
                },
                {
                  type: 'expandable-link-group',
                  text: 'Tutorials',
                  href: '/tutorials',
                  items: [
                    {
                      type: 'expandable-link-group',
                      text: 'Go',
                      href: '/tutorials/go',
                      items: [
                        {
                          type: 'link',
                          text: 'Basics',
                          href: '/tutorials/go/basics',
                        }
                      ]
                    },
                    {
                      type: 'expandable-link-group',
                      text: 'Java',
                      href: '/tutorials/java',
                      items: [
                        {
                          type: 'link',
                          text: 'Basics',
                          href: '/tutorials/java/basics',
                        }
                      ]
                    },
                    {
                      type: 'expandable-link-group',
                      text: 'JavaScript',
                      href: '/tutorials/javascript',
                      items: [
                        {
                          type: 'link',
                          text: 'Basics',
                          href: '/tutorials/javascript/basics',
                        }
                      ]
                    },
                    {
                      type: 'expandable-link-group',
                      text: 'React',
                      href: '/tutorials/react',
                      items: [
                        {
                          type: 'link',
                          text: 'Basics',
                          href: '/tutorials/react/basics',
                        }
                      ]
                    },
                  ],
                }
              ]}
            />
          }
          content={<MainOutlet path={path} />}
        />
      </ContentLayout>
    </>
  )
}

export default App
