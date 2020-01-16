import networkSingleton from "./NetworkSingleton";

class AuthenticationSingleton {
    isAuthenticated;

    async updateAuthentication() {
        try {
            await networkSingleton.get("/isAuthenticated");
            this.isAuthenticated = true;
        } catch (e) {
            this.isAuthenticated = false;
        }
    }

    async login(username, password) {
        const data = new FormData();
        data.append("username", username);
        data.append("password", password);

        try {
            await networkSingleton.post("/login", data);
            this.isAuthenticated = true;
        } catch (e) {
            this.isAuthenticated = false;
        }
    }
}

const authenticationSingleton = new AuthenticationSingleton();

export default authenticationSingleton;