const { hostname } = window.location;

const baseUrl = (hostname === 'localhost' || hostname === '127.0.0.1') 
    ? "http://localhost:5000" 
    : "";

export default baseUrl;