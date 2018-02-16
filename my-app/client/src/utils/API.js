import axios from "axios";

export default {
    // Gets all news
    getNews: function () {
        return axios.get("/api/news");
    },
    // Gets the news with the given id
    getNews: function (id) {
        return axios.get("/api/news/" + id);
    },
    // Deletes the news with the given id
    deleteNews: function (id) {
        return axios.delete("/api/news/" + id);
    },
    // Saves news to the database
    saveNews: function (newsData) {
        return axios.post("/api/news", bookData);
    }
};