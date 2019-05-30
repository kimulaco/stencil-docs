/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MarkdownHeading,
  SiteStructureItem,
} from './global/definitions';


export namespace Components {
  interface AppBurger {
    'toggleLeftSidebar': () => void;
  }
  interface AppIcon {
    'name'?: string;
  }
  interface AppRoot {}
  interface BlogComponent {
    'pageUrl': string;
  }
  interface ContributorList {
    'contributors': string[];
  }
  interface CustomClock {}
  interface DemoCard {
    'SourceBufferList'?: string;
    'demoUrl'?: string;
    'description'?: string;
    'imgPath'?: string;
    'name'?: string;
    'sourceUrl'?: string;
  }
  interface DocComponent {
    'page': string;
  }
  interface DsPage {}
  interface HighlightCode {}
  interface InPageNavigation {
    'currentPageUrl': string;
    'pageLinks': MarkdownHeading[];
    'srcUrl': string;
  }
  interface LandingPage {}
  interface LazyIframe {
    'frameBorder'?: string;
    'height'?: string;
    'identifier'?: string;
    'isVideo'?: boolean;
    'name'?: string;
    'scrolling'?: string;
    'src'?: string;
    'width'?: string;
  }
  interface LowerContentNav {
    'next'?: SiteStructureItem;
    'prev'?: SiteStructureItem;
  }
  interface NotfoundPage {}
  interface PwasPage {}
  interface ResourcesPage {}
  interface SiteHeader {}
  interface SiteMenu {
    'selectedParent': SiteStructureItem;
    'siteStructureList': SiteStructureItem[];
  }
  interface SiteTopBar {}
}

declare namespace LocalJSX {
  interface AppBurger extends JSXBase.HTMLAttributes {
    'toggleLeftSidebar'?: () => void;
  }
  interface AppIcon extends JSXBase.HTMLAttributes {
    'name'?: string;
  }
  interface AppRoot extends JSXBase.HTMLAttributes {}
  interface BlogComponent extends JSXBase.HTMLAttributes {
    'pageUrl'?: string;
  }
  interface ContributorList extends JSXBase.HTMLAttributes {
    'contributors'?: string[];
  }
  interface CustomClock extends JSXBase.HTMLAttributes {}
  interface DemoCard extends JSXBase.HTMLAttributes {
    'SourceBufferList'?: string;
    'demoUrl'?: string;
    'description'?: string;
    'imgPath'?: string;
    'name'?: string;
    'sourceUrl'?: string;
  }
  interface DocComponent extends JSXBase.HTMLAttributes {
    'page'?: string;
  }
  interface DsPage extends JSXBase.HTMLAttributes {}
  interface HighlightCode extends JSXBase.HTMLAttributes {}
  interface InPageNavigation extends JSXBase.HTMLAttributes {
    'currentPageUrl'?: string;
    'pageLinks'?: MarkdownHeading[];
    'srcUrl'?: string;
  }
  interface LandingPage extends JSXBase.HTMLAttributes {}
  interface LazyIframe extends JSXBase.HTMLAttributes {
    'frameBorder'?: string;
    'height'?: string;
    'identifier'?: string;
    'isVideo'?: boolean;
    'name'?: string;
    'onVideoLoaded'?: (event: CustomEvent<any>) => void;
    'scrolling'?: string;
    'src'?: string;
    'width'?: string;
  }
  interface LowerContentNav extends JSXBase.HTMLAttributes {
    'next'?: SiteStructureItem;
    'prev'?: SiteStructureItem;
  }
  interface NotfoundPage extends JSXBase.HTMLAttributes {}
  interface PwasPage extends JSXBase.HTMLAttributes {}
  interface ResourcesPage extends JSXBase.HTMLAttributes {}
  interface SiteHeader extends JSXBase.HTMLAttributes {}
  interface SiteMenu extends JSXBase.HTMLAttributes {
    'selectedParent'?: SiteStructureItem;
    'siteStructureList'?: SiteStructureItem[];
  }
  interface SiteTopBar extends JSXBase.HTMLAttributes {}

  interface IntrinsicElements {
    'app-burger': AppBurger;
    'app-icon': AppIcon;
    'app-root': AppRoot;
    'blog-component': BlogComponent;
    'contributor-list': ContributorList;
    'custom-clock': CustomClock;
    'demo-card': DemoCard;
    'doc-component': DocComponent;
    'ds-page': DsPage;
    'highlight-code': HighlightCode;
    'in-page-navigation': InPageNavigation;
    'landing-page': LandingPage;
    'lazy-iframe': LazyIframe;
    'lower-content-nav': LowerContentNav;
    'notfound-page': NotfoundPage;
    'pwas-page': PwasPage;
    'resources-page': ResourcesPage;
    'site-header': SiteHeader;
    'site-menu': SiteMenu;
    'site-top-bar': SiteTopBar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {}
  var HTMLAppBurgerElement: {
    prototype: HTMLAppBurgerElement;
    new (): HTMLAppBurgerElement;
  };

  interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {}
  var HTMLAppIconElement: {
    prototype: HTMLAppIconElement;
    new (): HTMLAppIconElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLBlogComponentElement extends Components.BlogComponent, HTMLStencilElement {}
  var HTMLBlogComponentElement: {
    prototype: HTMLBlogComponentElement;
    new (): HTMLBlogComponentElement;
  };

  interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {}
  var HTMLContributorListElement: {
    prototype: HTMLContributorListElement;
    new (): HTMLContributorListElement;
  };

  interface HTMLCustomClockElement extends Components.CustomClock, HTMLStencilElement {}
  var HTMLCustomClockElement: {
    prototype: HTMLCustomClockElement;
    new (): HTMLCustomClockElement;
  };

  interface HTMLDemoCardElement extends Components.DemoCard, HTMLStencilElement {}
  var HTMLDemoCardElement: {
    prototype: HTMLDemoCardElement;
    new (): HTMLDemoCardElement;
  };

  interface HTMLDocComponentElement extends Components.DocComponent, HTMLStencilElement {}
  var HTMLDocComponentElement: {
    prototype: HTMLDocComponentElement;
    new (): HTMLDocComponentElement;
  };

  interface HTMLDsPageElement extends Components.DsPage, HTMLStencilElement {}
  var HTMLDsPageElement: {
    prototype: HTMLDsPageElement;
    new (): HTMLDsPageElement;
  };

  interface HTMLHighlightCodeElement extends Components.HighlightCode, HTMLStencilElement {}
  var HTMLHighlightCodeElement: {
    prototype: HTMLHighlightCodeElement;
    new (): HTMLHighlightCodeElement;
  };

  interface HTMLInPageNavigationElement extends Components.InPageNavigation, HTMLStencilElement {}
  var HTMLInPageNavigationElement: {
    prototype: HTMLInPageNavigationElement;
    new (): HTMLInPageNavigationElement;
  };

  interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {}
  var HTMLLandingPageElement: {
    prototype: HTMLLandingPageElement;
    new (): HTMLLandingPageElement;
  };

  interface HTMLLazyIframeElement extends Components.LazyIframe, HTMLStencilElement {}
  var HTMLLazyIframeElement: {
    prototype: HTMLLazyIframeElement;
    new (): HTMLLazyIframeElement;
  };

  interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {}
  var HTMLLowerContentNavElement: {
    prototype: HTMLLowerContentNavElement;
    new (): HTMLLowerContentNavElement;
  };

  interface HTMLNotfoundPageElement extends Components.NotfoundPage, HTMLStencilElement {}
  var HTMLNotfoundPageElement: {
    prototype: HTMLNotfoundPageElement;
    new (): HTMLNotfoundPageElement;
  };

  interface HTMLPwasPageElement extends Components.PwasPage, HTMLStencilElement {}
  var HTMLPwasPageElement: {
    prototype: HTMLPwasPageElement;
    new (): HTMLPwasPageElement;
  };

  interface HTMLResourcesPageElement extends Components.ResourcesPage, HTMLStencilElement {}
  var HTMLResourcesPageElement: {
    prototype: HTMLResourcesPageElement;
    new (): HTMLResourcesPageElement;
  };

  interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {}
  var HTMLSiteHeaderElement: {
    prototype: HTMLSiteHeaderElement;
    new (): HTMLSiteHeaderElement;
  };

  interface HTMLSiteMenuElement extends Components.SiteMenu, HTMLStencilElement {}
  var HTMLSiteMenuElement: {
    prototype: HTMLSiteMenuElement;
    new (): HTMLSiteMenuElement;
  };

  interface HTMLSiteTopBarElement extends Components.SiteTopBar, HTMLStencilElement {}
  var HTMLSiteTopBarElement: {
    prototype: HTMLSiteTopBarElement;
    new (): HTMLSiteTopBarElement;
  };

  interface HTMLElementTagNameMap {
    'app-burger': HTMLAppBurgerElement;
    'app-icon': HTMLAppIconElement;
    'app-root': HTMLAppRootElement;
    'blog-component': HTMLBlogComponentElement;
    'contributor-list': HTMLContributorListElement;
    'custom-clock': HTMLCustomClockElement;
    'demo-card': HTMLDemoCardElement;
    'doc-component': HTMLDocComponentElement;
    'ds-page': HTMLDsPageElement;
    'highlight-code': HTMLHighlightCodeElement;
    'in-page-navigation': HTMLInPageNavigationElement;
    'landing-page': HTMLLandingPageElement;
    'lazy-iframe': HTMLLazyIframeElement;
    'lower-content-nav': HTMLLowerContentNavElement;
    'notfound-page': HTMLNotfoundPageElement;
    'pwas-page': HTMLPwasPageElement;
    'resources-page': HTMLResourcesPageElement;
    'site-header': HTMLSiteHeaderElement;
    'site-menu': HTMLSiteMenuElement;
    'site-top-bar': HTMLSiteTopBarElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

