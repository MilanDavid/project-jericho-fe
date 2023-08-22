const api = {

    getUser: () => {
        return fetch(`${process.env.API_URL}/external/auth/me`, {credentials: 'include'})
            .then(response => response.text())
            .then((res) => {
                return res ? JSON.parse(res) : null;
            });
    },

    getBasket: () => {
        return fetch(`${process.env.API_URL}/external/baskets`, {credentials: 'include'})
            .then(response => response.json());
    },

    removeFromBasket: (asset) => {
        let data = new FormData();
        data.append('asset_id', asset.id);

        return fetch(`${process.env.API_URL}/external/baskets/removeAsset`, {
            method: 'POST',
            credentials: 'include',
            body: data
        }).then((response) => {

            if (response.status !== 200) {
                return {
                    status: response.status,
                    data: '',
                };
            }

            return response.json().then((json) => {
                return {
                    status: 200,
                    data: json,
                };
            });
        });
    },

    addToBasket: (asset) => {
        let data = new FormData();
        data.append('asset_id', asset.id);

        return fetch(`${process.env.API_URL}/external/baskets/addAsset`, {
            method: 'POST',
            credentials: 'include',
            body: data
        }).then((response) => {

            if (response.status !== 200) {
                return {
                    status: response.status,
                    data: '',
                };
            }

            return response.json().then((json) => {
                return {
                    status: 200,
                    data: json,
                };
            });
        });
    },

    getIntegrations: () => {
        return fetch(`${process.env.API_URL}/external/integrations/all`, {credentials: 'include'})
            .then(response => response.json());
    },

    requestNewIntKey: (key) => {
        let data = new FormData();
        data.append('key', key);

        return fetch(`${process.env.API_URL}/external/integrations/new`, {
            method: 'POST',
            credentials: 'include',
            body: data
        }).then(response => response.json());
    },
};

export default api;
