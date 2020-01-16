import networkSingleton from "./NetworkSingleton";

class ApiSingleton {
    async getAllContests() {
        return (await networkSingleton.get("/contests")).data;
    }
}

const apiSingleton = new ApiSingleton();

export default apiSingleton;