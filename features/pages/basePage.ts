import Selector from './selectors/simulator.json';

class BasePage {
  title: string;
  constructor() {
      this.title = 'My base Page';
  }

  open(path: string) {
      browser.url(path);
  }

  get EnvironmentMenu(): WebdriverIO.Element {
     return $('[title="Select an Environment"]');
  }

  get Environment(): WebdriverIO.Element {
    return $('[data-normalized-text*='+Selector.Environment+']');
  }

  get ClientMenu(): WebdriverIO.Element {
    return $('[title="Select a Client..."]');
  }

  get Client(): WebdriverIO.Element {
    return $('[data-normalized-text*='+Selector.Client+']');
  }

  get ProgramMenu(): WebdriverIO.Element {
    return $('[title="Select a Program..."]');
  }

  get ProgramId(): WebdriverIO.Element {
    return $('[data-normalized-text*='+Selector.ProgramId+']');
  }

  get SiteMenu(): WebdriverIO.Element {
    return $('[title="Select a Site..."]');
  }

  get Site(): WebdriverIO.Element {
    return $('[data-normalized-text*='+Selector.Sites+']');
  }

  get CultureMenu(): WebdriverIO.Element {
    return $('[title="Select a Culture..."]');
  }

  get Culture(): WebdriverIO.Element {
    return $('[data-normalized-text*='+Selector.Culture+']');
  }

  get PointBalance(): WebdriverIO.Element {
      return $('[ng-model="model.pointBalance"]');
  }

  get SubmitButton(): WebdriverIO.Element {
    return $('[ng-click="redirectToClientPage()"]');
  }

  get FlightsTab(): WebdriverIO.Element {
      return $('[aria-controls="flightSearch"]');
  }
  
  get PageTitle(): string {
    return browser.getTitle();
  }

  fillPointsBalance() {
    browser.keys(Selector.PointBalance);
  }

}

export default new BasePage();
