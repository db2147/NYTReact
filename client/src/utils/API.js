import axios from "axios";

export default {
    // Gets all news
    getArticles: function () {
        return axios.get("/api/article");
    },
    // Gets the news with the given id
    // getNews: function (id) {
    //     return axios.get("/api/news/" + id);
    // },
    // Deletes the news with the given id
    deleteNews: function (id) {
        return axios.delete("/api/news/" + id);
    },
    // Saves news to the database
    saveArticles: function (newsData) {
        return axios.post("/api/news", newsData);
    }
};