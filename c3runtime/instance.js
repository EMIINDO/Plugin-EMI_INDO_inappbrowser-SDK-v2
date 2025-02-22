"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_inappbrowser.Instance = class NewPluginInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }

            this._Candition = globalThis.C3.Plugins.EMI_INDO_inappbrowser.Cnds;

            if (typeof cordova === 'undefined') {
                return;
            }


            var _inAppBrowser;

            const self = this;


            let openUrl = async (url, target, location) => {


                _inAppBrowser = window.cordova.InAppBrowser.open(url, this.setTarget(target), this.setLocation(location));


                _inAppBrowser.addEventListener('loadstop', (event) => {

                    self._trigger(self._Candition.OnLoadStop);

                });

                _inAppBrowser.addEventListener('loadstart', (event) => {

                    self._trigger(self._Candition.OnLoadStart);

                });

                _inAppBrowser.addEventListener('loaderror', (event) => {

                    self._trigger(self._Candition.OnLoadError);

                });


                _inAppBrowser.addEventListener('exit', (event) => {

                    self._trigger(self._Candition.OnExit);

                });


            }


            let show = async () => {

                _inAppBrowser.show()

            }


            let hide = async () => {

                _inAppBrowser.hide()

            }

            let exit = async () => {

                _inAppBrowser.close()

            }

            this.openUrl = openUrl;
            this.show = show;
            this.hide = hide;
            this.exit = exit;
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {

        }

        setTarget(_index) {
            switch (_index) {
                case 0:
                    return "_self";
                case 1:
                    return "_blank";
                case 2:
                    return "_system";
            }
        }

        setLocation(_index) {
            switch (_index) {
                case 0:
                    return "location=yes";
                case 1:
                    return "location=no";
            }
        }


    };
}