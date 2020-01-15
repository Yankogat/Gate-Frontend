import networkSingleton from "./NetworkSingleton";

class AuthenticationSingleton {
    isAuthenticated;

    updateAuthentication() {
        this.isAuthenticated = networkSingleton.get("/isAuthenticated");
    }

    getAuthentication() {
        return this.isAuthenticated;
    }

    async login(username, password) {
        const data = new FormData();
        data.append("username", username);
        data.append("password", password);

        try {
            let response = await networkSingleton.post("/login", data);
            this.isAuthenticated = true
        } catch (e) {
            this.isAuthenticated = false
        }
    }
}

export default new AuthenticationSingleton();