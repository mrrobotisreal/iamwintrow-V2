// import { TopNavigationProps } from "@cloudscape-design/components";
import { FormattedMessage } from "react-intl";

type topNavIdentityPropsType = {
  href: string;
  title: string;
  logo: {
    src: string,
    alt: string,
  }
};

export const topNavIdentityProps: topNavIdentityPropsType = {
  href: '#',
  title: 'I Am Wintrow',
  logo: {
    src: '/murrica.png',
    alt: 'American Flag',
  }
};

export const topNavi18nStringsProps = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};


// type topNavUtilitiesPropsType = [];