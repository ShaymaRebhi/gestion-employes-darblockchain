import http from "../common/http-common";

//has methods for sending HTTP requests to the Apis.

class EmployeesDataService {
    getAll() {
        return http.get("/employees");
    }

    get(id) {
        return http.get(`/employee/${id}`);
    }

    create(data) {
        return http.post("/add", data);
    }

}

export default new EmployeesDataService();
