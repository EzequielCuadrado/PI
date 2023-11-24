const axios = require('axios');
const defaultImage = 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://beyondtheflag.com/wp-content/uploads/getty-images/2021/03/1230080198.jpeg';


const assignDefaultImage = async (driver) => {
    if (!driver.image || !driver.image.url) {
        try {
            driver.image = {
                url: defaultImage,
                imageby: "Unknown",
            };
        } catch(error) {
            console.log('error imagen');
        }
    }
};

module.exports = {
    assignDefaultImage,
}