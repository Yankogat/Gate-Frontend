export default {
    getTextCorrespondingToStatusCode: (status) => {
        return {
            ACCEPTED: "Зачтена",
            AWAITING_TESTING: "Ожидает тестирования",
            UNATTEMPTED: "Не решена"
        }[status];
    },
    getClassCorrespondingToStatusCode: (status) => {
        return "text-" + {
            ACCEPTED: "success",
            AWAITING_TESTING: "secondary",
            UNATTEMPTED: "secondary"
        }[status];
    }
}