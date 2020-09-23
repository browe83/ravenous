const apiKey =
  "59noMRjp_FqU5cmm7d7fWjbn37V5diXMVHT-o_DCpliG1wWrZyzcYierXw9BSWru3JU7grob4EzJOKjHdqWO70YAPW5QQJJmFfqwM8QwWvvw-pRtkL5622FS5l1rX3Yx";

const Yelp = {
  search: async function (term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` },
      }
    )
      .then((respsonse) => {
        return respsonse.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.city,
            zipCode: business.location.zip_code,
            category: business.categories[0].alias,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};

export default Yelp;
