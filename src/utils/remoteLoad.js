export default function remoteLoad(url, hasCallback) {
  return createScript(url)
  /**
   * 创建script
   * @param url
   * @returns {Promise}
   */
  function createScript(url) {
    var scriptElement = document.createElement('script')
    scriptElement.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(scriptElement)
    var promise = new Promise((resolve, reject) => {
      scriptElement.addEventListener('load', e => {
        removeScript(scriptElement)
        if (!hasCallback) {
          resolve(e)
        }
      }, false)

      scriptElement.addEventListener('error', e => {
        removeScript(scriptElement)
        reject(e)
      }, false)

      if (hasCallback) {
        window.____callback____ = function () {
          resolve()
          window.____callback____ = null
        }
      }
    })

    if (hasCallback) {
      url += '&callback=____callback____'
    }

    scriptElement.src = url
    // console.log('scriptElement', scriptElement)
    return promise
  }

  /**
   * 移除script标签
   * @param scriptElement script dom
   */
  function removeScript(scriptElement) {
    // var contenter = document.getElementById('ceshi');
    //document.body.removeChild(scriptElement)
    document.getElementsByTagName('head')[0].removeChild(scriptElement)
  }
}
