class JsonTool {
    
    static convertToQueryString = (data) => {
        let arr = []
        Object.keys(data || {})?.forEach((key) => {
            if (data[key] != null && data[key] != undefined && data[key] != "null" && data[key] != "undefined") {
                if (Array.isArray(data[key])) {
                    let values = data[key]
                    values?.forEach(value => {
                        arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
                    })
                }
                else {
                    arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                }

            }
        })
        return arr.join('&');
    }

    }
export { JsonTool }