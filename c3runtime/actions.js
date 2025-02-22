"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_inappbrowser.Acts = {
        ActionId(url, target, location) {
            if (typeof cordova == 'undefined') {
                return;
            }

            const self = this;

            //  var inAppBrowserRef;


            this.inAppBrowserRef = window.cordova.InAppBrowser.open(url, target, location);

            this.inAppBrowserRef.addEventListener('loadstart', function () {


                self._trigger(self._Candition.OnLoadStart);

            });

            this.inAppBrowserRef.addEventListener('loadstop', function () {

                self._trigger(self._Candition.OnLoadStop);

            });

            this.inAppBrowserRef.addEventListener('loaderror', function () {

                self._trigger(self._Candition.OnLoadError);

            });

        },

        async OpenUrl(url, target, location) {
            if (typeof cordova == 'undefined') {
                return;
            }

            await this.openUrl(url, target, location);

        },

        async Show() {
            if (typeof cordova == 'undefined') {
                return;
            }
            await this.show();

        },

        async Hide() {
            if (typeof cordova == 'undefined') {
                return;
            }

            await this.hide();
        },

        async Close() {
            if (typeof cordova == 'undefined') {
                return;
            }

            await this.exit();

        }
    };
}