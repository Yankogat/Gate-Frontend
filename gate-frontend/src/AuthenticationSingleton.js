import networkSingleton from "./NetworkSingleton";

class AuthenticationSingleton{
    isAuthenticated;
    id;

    async updateAuthentication() {
        try {
            await networkSingleton.get("/isAuthenticated");
            this.isAuthenticated = true;
            this.id = (await networkSingleton.get("/getMyId")).data
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
            this.id = (await networkSingleton.get("/getMyId")).data
            debugger
        } catch (e) {
            this.isAuthenticated = false;
        }
    }
}

const authenticationSingleton = new AuthenticationSingleton();

export default authenticationSingleton;