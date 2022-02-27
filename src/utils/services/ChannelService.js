/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
class ChannelService {
  constructor() {
    this.loadScript();
  }

  loadScript() {
    const w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function () {})(
        'ChannelIO script included twice.',
      );
    }
    var ch = function () {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function (args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  }

  boot(settings) {
    console.log('BOOT');
    window.ChannelIO('boot', settings);
  }

  shutdown() {
    window.ChannelIO('shutdown');
  }
}

export default ChannelService;
