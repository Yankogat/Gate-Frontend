import networkSingleton from "./NetworkSingleton";

class ApiSingleton {
    async getAllContests() {
        return (await networkSingleton.get("/contests")).data;
    }

    async getContestById(contestId) {
        return (await networkSingleton.get(`/contests/${contestId}`)).data;
    }

    async getMonitorStandingsByContestId(contestId) {
        return (await networkSingleton.get(`/contests/${contestId}/monitor`)).data;
    }

    async getProblemsByContestId(contestId) {
        return (await networkSingleton.get(`/contests/${contestId}/problems`)).data;
    }

    async getSubmitsByContestId(contestId) {
        return (await networkSingleton.get(`/contests/${contestId}/submits`)).data;
    }

    //TODO
    async getCompilersByContestId(id) {
        return [
            {
                name: "С",
                value: "С"
            },
            {
                name: "Python 3",
                value: "PYTHON3"
            }
        ]
    }

    async submitSolution(contestId, solutionSrc, problemId, compiler) {
        return (await networkSingleton.post(`/contests/${contestId}/problems/${problemId}/submits`, {
            solution: {
                sourceCode: solutionSrc,
                compiler: compiler
            }
        })).data;
    }
}

const apiSingleton = new ApiSingleton();

export default apiSingleton;