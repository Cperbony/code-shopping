export const environment = {
    production: true,
    api: {
        protocol: 'http',
        host: '192.168.25.48:8000',
        // host: '192.168.25.49:8000',
        get url(){
            return `${this.protocol}://${this.host}/api`
        }
    },
    baseFilesUrl: 'http://192.168.25.48:8000/storage',
    // baseFilesUrl: 'http://192.168.25.49:8000/storage',
    showFirebaseUI: !document.URL.startsWith('file:///')
};