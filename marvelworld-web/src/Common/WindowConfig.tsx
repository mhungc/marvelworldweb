interface iConfig extends Window {
    _env_ : {
        REACT_APP_API_URL: string,

    }
  }
  
  declare var window: iConfig;
  
  export const windowConfig = window;