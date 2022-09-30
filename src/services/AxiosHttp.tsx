import axios from "axios";


export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer Oo-d-mKYIGLqgEwxbmmvKFIBMU0pSbGdXqiVYb3JUERThlVi9i4UgZDk-NksEUMyUkodiH5lVJrHdn7BrnxKLLfdg1asd7z8OqgnhFWtK6cYNM2CaN1eN4nJWw0zY3Yx"
    }
    
});